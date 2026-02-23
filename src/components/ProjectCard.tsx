import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <article className="glass rounded-2xl overflow-hidden group project-card project-card-hover transition-all duration-300 flex flex-col">
            {/* Thumbnail */}
            <div className="relative w-full aspect-video overflow-hidden bg-[var(--bg)]">
                <Image
                    src={project.thumbnail_image_url}
                    alt={`Screenshot proyek ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay links */}
                <div className="absolute inset-0 bg-[var(--bg)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.live_demo_url && project.live_demo_url !== "#" && (
                        <a
                            href={project.live_demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo ${project.title}`}
                            className="flex items-center gap-1.5 bg-[var(--accent)] text-[var(--bg)] rounded-xl px-4 py-2 text-sm font-semibold hover:bg-[var(--accent-dark)] transition-colors"
                        >
                            <ExternalLink size={14} /> Demo
                        </a>
                    )}
                    {project.source_code_url && (
                        <a
                            href={project.source_code_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Source code ${project.title}`}
                            className="flex items-center gap-1.5 border border-white/30 text-white rounded-xl px-4 py-2 text-sm font-semibold hover:border-white/60 transition-colors"
                        >
                            <Github size={14} /> Code
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2 h-7 flex items-center">
                    {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 h-[4.5rem]">
                    {project.short_description}
                </p>

                {/* Tech stack badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech_stack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer links */}
                <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center gap-4">
                    {project.source_code_url && (
                        <a
                            href={project.source_code_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub ${project.title}`}
                            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.live_demo_url && project.live_demo_url !== "#" && (
                        <a
                            href={project.live_demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo ${project.title}`}
                            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
