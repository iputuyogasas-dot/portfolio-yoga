import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <>
            <section id="contact" className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <AnimatedSection>
                        <SectionTitle
                            title="Mari Berkolaborasi"
                            subtitle="Terbuka untuk peluang kerja sama, proyek freelance, atau sekadar ngobrol soal teknologi."
                        />
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <p className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed">
                            Apakah Anda memiliki proyek menarik atau ingin berdiskusi tentang peluang kerja?
                            Saya selalu senang mendengar ide-ide baru. Kirim pesan dan kita mulai dari sini!
                        </p>

                        <a
                            href={`mailto:${profile.contact_email}`}
                            className="inline-flex items-center gap-3 bg-[var(--accent)] text-[var(--bg)] font-bold text-lg rounded-2xl px-8 py-4 shadow-xl shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/40 transition-all duration-200 contact-button"
                        >
                            <Mail size={22} />
                            {profile.contact_email}
                        </a>

                        {/* Social Links */}
                        <div className="mt-12 flex items-center justify-center flex-wrap gap-6">
                            <a
                                href={profile.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
                            >
                                <Github size={22} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                            <span className="hidden md:block w-px h-6 bg-[var(--border)]" />
                            <a
                                href={profile.linkedin_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
                            >
                                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                            <span className="hidden md:block w-px h-6 bg-[var(--border)]" />
                            <a
                                href={profile.instagram_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
                            >
                                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">Instagram</span>
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[var(--border)] py-8 px-6 text-center">
                <p className="text-sm text-[var(--text-secondary)]">
                    © 2026 <span className="text-[var(--text-primary)] font-medium">{profile.full_name}</span>.
                    Dibangun dengan{" "}
                    <span className="text-[var(--accent)]">Next.js</span> &{" "}
                    <span className="text-[var(--accent)]">Tailwind CSS</span>.
                </p>
            </footer>
        </>
    );
}
