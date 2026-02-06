import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
  };
}

async function sendToTelegram(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken) {
    console.error('TELEGRAM_BOT_TOKEN not configured');
    return false;
  }

  if (!telegramChatId) {
    console.error('TELEGRAM_CHAT_ID not configured');
    return false;
  }

  const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name.trim()}
📧 *Email:* ${data.email.trim()}
📱 *Phone:* ${data.phone.trim()}

💬 *Message:*
${data.message.trim()}

⏰ *Submitted:* ${new Date().toISOString()}
📍 *Timezone:* ${Intl.DateTimeFormat().resolvedOptions().timeZone}
  `.trim();

  try {
    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (response.ok) {
      return true;
    } else {
      const errorText = await response.text();
      console.error('Failed to send to Telegram:', errorText);
      return false;
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error('Gmail SMTP credentials not configured');
    return false;
  }

  // Minimalistic email template matching portfolio aesthetics
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px; background-color: #111111; border-radius: 16px; border: 1px solid #222222; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #222222;">
              <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #666666;">New Message</p>
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #ffffff;">Portfolio Contact</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 24px 32px;">
              <!-- From -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 16px; background-color: #0a0a0a; border-radius: 12px; border: 1px solid #1a1a1a;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #525252;">From</p>
                    <p style="margin: 0; font-size: 16px; font-weight: 500; color: #ffffff;">${data.name.trim()}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="50%" style="padding: 16px; background-color: #0a0a0a; border-radius: 12px 0 0 12px; border: 1px solid #1a1a1a; border-right: none;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #525252;">Email</p>
                    <a href="mailto:${data.email.trim()}" style="font-size: 14px; color: #a3a3a3; text-decoration: none;">${data.email.trim()}</a>
                  </td>
                  <td width="50%" style="padding: 16px; background-color: #0a0a0a; border-radius: 0 12px 12px 0; border: 1px solid #1a1a1a;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #525252;">Phone</p>
                    <a href="tel:${data.phone.trim()}" style="font-size: 14px; color: #a3a3a3; text-decoration: none;">${data.phone.trim()}</a>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 20px; background-color: #0a0a0a; border-radius: 12px; border: 1px solid #1a1a1a;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #525252;">Message</p>
                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #e5e5e5; white-space: pre-wrap;">${data.message.trim()}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; border-top: 1px solid #222222;">
              <p style="margin: 0; font-size: 12px; color: #525252; text-align: center;">
                ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.default.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${gmailUser}>`,
      to: gmailUser,
      subject: `✉️ ${data.name.trim()} — Portfolio Contact`,
      html: htmlContent,
      replyTo: data.email.trim(),
    });

    return true;
  } catch (error) {
    console.error('Error sending email via Gmail SMTP:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': (Date.now() + RATE_LIMIT_WINDOW).toString(),
          },
        },
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send both Telegram and Email notifications in parallel
    const [telegramSent, emailSent] = await Promise.all([
      sendToTelegram(validatedData),
      sendEmail(validatedData),
    ]);

    // Succeed if at least one notification method works
    if (!telegramSent && !emailSent) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: 'Message sent successfully!',
        success: true,
      },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: error.issues,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
