import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { LinkButton } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { Download } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <SectionTitle
                        title="Tentang Saya"
                        subtitle="Sedikit cerita tentang siapa saya dan bagaimana saya bekerja."
                    />
                </AnimatedSection>

                <div className="flex flex-col md:flex-row items-center gap-14 mt-8">
                    {/* Photo */}
                    <AnimatedSection delay={0.1} className="flex-shrink-0">
                        <div className="relative w-56 h-56 md:w-72 md:h-72">
                            {/* Decorative ring */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-[var(--accent)]/30 -rotate-3 scale-105" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden glass">
                                <Image
                                    src="/images/profile.jpg"
                                    alt={`Foto profil ${profile.full_name}`}
                                    fill
                                    sizes="(max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Accent dot */}
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[var(--accent)] shadow-lg shadow-[var(--accent)]/50" />
                        </div>
                    </AnimatedSection>

                    {/* Text */}
                    <AnimatedSection delay={0.2} className="flex-1">
                        <div className="space-y-5">
                            {profile.about_me.map((paragraph, i) => (
                                <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-8">
                            <LinkButton
                                href={profile.resume_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                            >
                                <Download size={16} />
                                Unduh CV / Resume
                            </LinkButton>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
