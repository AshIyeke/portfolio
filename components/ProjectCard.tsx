import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    mainImage?: any;
    category?: string;
    techStack?: string[];
    projectUrl?: string;
    githubUrl?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md">
      <Link href={`/projects/${project.slug}`} className="relative aspect-video overflow-hidden block">
        {project.mainImage ? (
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image available</span>
          </div>
        )}
        {project.category && (
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-md shadow-sm">
              {project.category}
            </span>
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
          <h3 className="text-2xl font-bold mb-2">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-grow">
          {project.description}
        </p>
        
        {project.techStack && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech: string, index: number) => (
              <span key={index} className="px-2 py-0.5 text-xs bg-muted rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-4 mt-auto">
          <Link 
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            View Project Details
          </Link>
          {project.githubUrl && (
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground ml-auto"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
