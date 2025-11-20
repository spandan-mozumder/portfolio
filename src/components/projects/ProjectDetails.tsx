'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Project } from '@/types/project';
import { CheckCircle } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import ArrowRight from '../svgs/ArrowRight';
import Github from '../svgs/Github';
import Website from '../svgs/Website';
import { Button } from '../ui/button';

interface ProjectDetailsProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetails({
  project,
  open,
  onOpenChange,
}: ProjectDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-gray-100 dark:border-gray-800">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            {project.video ? (
              <video
                src={project.video}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Highlights
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="size-4 mt-0.5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border flex-wrap">
              {project.projectDetailsPageSlug && (
                <Button asChild variant="secondary" size="sm" className="gap-2">
                  <Link href={project.projectDetailsPageSlug}>
                    <ArrowRight className="size-4" />
                    View Case Study
                  </Link>
                </Button>
              )}
              {project.link && (
                <Button asChild size="sm" className="gap-2">
                  <Link href={project.link} target="_blank">
                    <Website />
                    Visit Website
                  </Link>
                </Button>
              )}
              {project.github && (
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link href={project.github} target="_blank">
                    <Github />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
