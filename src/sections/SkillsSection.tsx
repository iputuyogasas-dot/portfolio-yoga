"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Settings } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills, Skill } from "@/data/skills";

const CATEGORY_ORDER: Skill["category"][] = [
    "Bahasa Pemrograman",
    "Framework",
    "Tools",
];

const categoryMeta: Record<string, { icon: any; color: string }> = {
    "Bahasa Pemrograman": { icon: Code2, color: "#00d4aa" },
    Framework: { icon: Layout, color: "#3b82f6" },
    Tools: { icon: Settings, color: "#a855f7" },
};

function SkillBadge({ skill }: { skill: Skill }) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[var(--accent)]/40 transition-all duration-200 group w-48 flex-shrink-0"
        >
            <div className="w-10 h-10 rounded-lg bg-[var(--bg)]/50 flex items-center justify-center p-1.5 group-hover:bg-[var(--accent)]/5 transition-colors flex-shrink-0 border border-[var(--border)] group-hover:border-[var(--accent)]/20">
                <img
                    src={skill.icon_name === "antigravity" ? "/images/skills/antigravity.svg" : `https://skillicons.dev/icons?i=${skill.icon_name}`}
                    alt={skill.name}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                />
            </div>
            <span className="text-sm font-medium text-[var(--text-primary)] truncate">{skill.name}</span>
        </motion.div>
    );
}

export default function SkillsSection() {
    const grouped = CATEGORY_ORDER.map((cat) => ({
        category: cat,
        items: skills.filter((s) => s.category === cat),
    }));

    return (
        <section id="skills" className="py-24 overflow-hidden relative">
            {/* Animated Background decorative elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 30, 0],
                    y: [0, 20, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 w-80 h-80 bg-[var(--accent)]/10 blur-[130px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -40, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 blur-[130px] pointer-events-none"
            />

            <div className="px-6 mb-16">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection>
                        <SectionTitle
                            title="Keahlian"
                            subtitle="Teknologi dan alat yang saya gunakan sehari-hari untuk membangun produk digital."
                        />
                    </AnimatedSection>
                </div>
            </div>

            <div className="space-y-20">
                {grouped.map(({ category, items }, gi) => {
                    const { icon: CategoryIcon, color } = categoryMeta[category] || { icon: Code2, color: "#00d4aa" };
                    const track = [...items, ...items, ...items];
                    const isEven = gi % 2 === 0;

                    return (
                        <div key={category} className="relative">
                            {/* Category Header with Floating Animation */}
                            <div className="max-w-6xl mx-auto px-6 mb-8">
                                <AnimatedSection delay={gi * 0.15}>
                                    <div className="flex items-center gap-5">
                                        <motion.div
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: gi * 0.5 }}
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
                                            style={{ color, boxShadow: `0 0 20px ${color}15` }}
                                        >
                                            <CategoryIcon size={24} />
                                        </motion.div>

                                        <div className="flex flex-col">
                                            <h3 className="text-base font-bold tracking-wider text-[var(--text-primary)]">
                                                {category}
                                            </h3>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "2rem" }}
                                                viewport={{ once: true }}
                                                className="h-1 mt-1 rounded-full"
                                                style={{ backgroundColor: color }}
                                            />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Marquee Row with entrance animation */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: gi * 0.2 }}
                                className="relative py-4"
                                style={{
                                    maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                                }}
                            >
                                <div className={`flex gap-5 w-max ${isEven ? "animate-marquee" : "animate-marquee-reverse"
                                    }`}>
                                    {track.map((skill, i) => (
                                        <SkillBadge key={`${skill.id}-${gi}-${i}`} skill={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
