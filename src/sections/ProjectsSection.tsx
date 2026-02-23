import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const sorted = [...projects].sort((a, b) => a.display_order - b.display_order);

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <SectionTitle
                        title="Proyek"
                        subtitle="Beberapa karya terbaik yang pernah saya bangun — dari ide hingga produk jadi."
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {sorted.slice(0, 2).map((project, i) => (
                        <AnimatedSection key={project.id} delay={i * 0.1}>
                            <ProjectCard project={project} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
