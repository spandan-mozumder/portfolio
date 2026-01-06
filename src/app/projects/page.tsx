import Container from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects, inDevelopmentProjects } from '@/config/Projects';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My projects and work across different technologies and domains.
          </p>
        </div>

        <Separator />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="all">
              All Projects
              <span className="ml-1.5 text-xs text-muted-foreground">
                ({projects.length})
              </span>
            </TabsTrigger>
            <TabsTrigger value="in-development">
              In Development
              <span className="ml-1.5 text-xs text-muted-foreground">
                ({inDevelopmentProjects.length})
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <ProjectList projects={projects} />
          </TabsContent>

          <TabsContent value="in-development" className="mt-6">
            <ProjectList projects={inDevelopmentProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}
