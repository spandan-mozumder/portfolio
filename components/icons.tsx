import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Phone,
  Briefcase,
  Calendar,
  MapPin,
  Sun,
  Moon,
  Twitter
} from 'lucide-react';

type IconProps = React.ComponentProps<typeof Github>;

export const GithubIcon: React.FC<IconProps> = (props) => <Github {...props} />;
export const LinkedinIcon: React.FC<IconProps> = (props) => <Linkedin {...props} />;
export const MailIcon: React.FC<IconProps> = (props) => <Mail {...props} />;
export const LinkIcon: React.FC<IconProps> = (props) => <ExternalLink {...props} />;
export const ChevronLeftIcon: React.FC<IconProps> = (props) => <ChevronLeft {...props} />;
export const ChevronRightIcon: React.FC<IconProps> = (props) => <ChevronRight {...props} />;
export const CheckCircleIcon: React.FC<IconProps> = (props) => <CheckCircle {...props} />;
export const PhoneIcon: React.FC<IconProps> = (props) => <Phone {...props} />;
export const BriefcaseIcon: React.FC<IconProps> = (props) => <Briefcase {...props} />;
export const CalendarIcon: React.FC<IconProps> = (props) => <Calendar {...props} />;
export const LocationIcon: React.FC<IconProps> = (props) => <MapPin {...props} />;
export const SunIcon: React.FC<IconProps> = (props) => <Sun {...props} />;
export const MoonIcon: React.FC<IconProps> = (props) => <Moon {...props} />;
export const XIcon: React.FC<IconProps> = (props) => <Twitter {...props} />;