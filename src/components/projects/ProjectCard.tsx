'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import ArrowRight from '../svgs/ArrowRight';
import Github from '../svgs/Github';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { ProjectDetails } from './ProjectDetails';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      <ProjectDetails
        project={project}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
      <Card
        className="group h-full w-full overflow-hidden transition-all p-4 border-gray-100 dark:border-gray-800 shadow-none hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 cursor-pointer"
        onClick={() => setDialogOpen(true)}
      >
        <CardHeader className="p-0 mb-4">
          <div className="group relative aspect-video overflow-hidden rounded-lg">
            <Image
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={project.image}
              alt={project.title}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        </CardHeader>

        <CardContent className="px-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              {project.projectDetailsPageSlug ? (
                <Link
                  href={project.projectDetailsPageSlug}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-xl font-semibold leading-tight group-hover:text-primary hover:cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
              ) : (
                <h3 className="text-xl font-semibold leading-tight">
                  {project.title}
                </h3>
              )}
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className="text-secondary flex size-6 items-center justify-center hover:text-primary transition-colors"
                      href={project.link}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Website</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    {project.github && (
                      <Link
                        className="text-secondary flex size-6 items-center justify-center hover:text-primary transition-colors"
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github />
                      </Link>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <p className="text-secondary line-clamp-3">{project.description}</p>

            <div>
              <h4 className="text-sm font-medium mb-2 text-secondary">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <div className="size-6 hover:scale-120 transition-all duration-300 hover:cursor-pointer">
                        {technology.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{technology.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        {project.details && (
          <CardFooter className="px-2 pt-0 pb-2 flex justify-between">
            <div
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                project.isWorking
                  ? 'border-green-300 bg-green-500/10'
                  : 'border-red-300 bg-red-500/10'
              }`}
            >
              {project.isWorking ? (
                <>
                  <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                  All Systems Operational
                </>
              ) : (
                <>
                  <div className="size-2 rounded-full bg-red-500 animate-pulse" />
                  Building
                </>
              )}
            </div>
            {project.projectDetailsPageSlug && (
              <Link
                href={project.projectDetailsPageSlug}
                className="text-secondary flex items-center gap-2 text-sm hover:underline underline-offset-4 hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Details <ArrowRight className="size-4" />
              </Link>
            )}
          </CardFooter>
        )}
      </Card>
    </>
  );
}
