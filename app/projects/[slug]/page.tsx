import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaGithub,
  FaGlobe,
  FaCalendar,
  FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: project } = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <FaArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border bg-muted shadow-lg">
            {project.mainImage ? (
              <Image
                src={urlFor(project.mainImage).url()}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground">
                  No image available
                </span>
              </div>
            )}
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">About this Project</h2>
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Project Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((image: any, index: number) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden border bg-muted"
                  >
                    <Image
                      src={urlFor(image).url()}
                      alt={`${project.title} gallery ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border bg-card shadow-sm sticky top-8">
            <div className="mb-6">
              {project.category && (
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full mb-4 inline-block">
                  {project.category}
                </span>
              )}
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              {project.publishedAt && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaCalendar className="w-4 h-4" />
                  {new Date(project.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              )}
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <FaLayerGroup className="w-4 h-4" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-muted rounded-md border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {project.projectUrl && (
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all font-bold shadow-md"
                >
                  <FaGlobe className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-xl transition-all font-bold shadow-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  View Source
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
