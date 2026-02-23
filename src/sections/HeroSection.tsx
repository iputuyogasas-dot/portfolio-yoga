"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        >
            {/* Background blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500 opacity-[0.05] blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-4xl w-full text-center">
                {/* Greeting badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full px-4 py-1.5 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    Tersedia untuk peluang baru
                </motion.div>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight hero-title">
                    I Putu{" "}
                    <span className="gradient-text">Yoga</span>
                    <br />
                    Sastrawan
                </h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto"
                >
                    Junior Full-Stack Developer yang membangun aplikasi web{" "}
                    <em className="text-[var(--text-primary)] not-italic font-medium">
                        modern, cepat, dan berdampak.
                    </em>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <Button variant="primary" onClick={() => scrollTo("#projects")}>
                        Lihat Proyek
                        <ArrowDown size={16} />
                    </Button>
                    <Button variant="secondary" onClick={() => scrollTo("#contact")}>
                        <Mail size={16} />
                        Hubungi Saya
                    </Button>
                </motion.div>

                {/* Social quick links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-10 flex items-center justify-center gap-6"
                >
                    <a
                        href={profile.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <span className="w-px h-5 bg-[var(--border)]" />
                    <a
                        href={`mailto:${profile.contact_email}`}
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-sm"
                    >
                        {profile.contact_email}
                    </a>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)] text-xs"
            >
                <span>Scroll ke bawah</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
