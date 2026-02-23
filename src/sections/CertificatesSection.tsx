"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates, Certificate } from "@/data/certificates";

/**
 * Duplicates the array to create a seamless infinite loop.
 * We render 3x the list so the marquee never shows a gap.
 */
const track = [...certificates, ...certificates, ...certificates];

function CertificateCard({
    cert,
    onOpen
}: {
    cert: Certificate,
    onOpen: (cert: Certificate) => void
}) {
    return (
        <div
            className="relative flex-shrink-0 w-72 group cursor-zoom-in"
            onClick={() => onOpen(cert)}
        >
            {/* Card */}
            <div className="glass rounded-2xl overflow-hidden border border-[var(--border)] group-hover:border-[var(--accent)]/40 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-[var(--accent)]/10">
                {/* Certificate image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--bg)]">
                    <Image
                        src={cert.image_url}
                        alt={`Sertifikat ${cert.title}`}
                        fill
                        sizes="288px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-[var(--bg)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium border border-white/20">
                            Klik untuk memperbesar
                        </span>
                    </div>
                </div>

                {/* Info */}
                <div className="px-4 py-3">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-1">
                        {cert.category}
                    </span>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug line-clamp-2 h-10 flex items-center">
                        {cert.title}
                    </h3>
                    <div className="mt-1.5 flex items-center justify-between">
                        <p className="text-xs text-[var(--text-secondary)] truncate">{cert.issuer}</p>
                        <span className="text-xs text-[var(--text-secondary)] ml-2 flex-shrink-0">{cert.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CertificatesSection() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedCert]);

    return (
        <section id="certificates" className="py-24 overflow-hidden relative">
            <div className="px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="Certificates"
                        subtitle="A showcase of my dedication, learning journey, and professional growth."
                    />
                </AnimatedSection>
            </div>

            <div className="relative mt-10">
                <AnimatePresence mode="wait">
                    {!isExpanded ? (
                        <motion.div
                            key="marquee"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                maskImage:
                                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            }}
                        >
                            <div className="flex gap-5 w-max animate-marquee">
                                {track.map((cert, i) => (
                                    <CertificateCard
                                        key={`${cert.id}-${i}`}
                                        cert={cert}
                                        onOpen={setSelectedCert}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
                        >
                            {certificates.map((cert) => (
                                <div key={cert.id} className="w-full">
                                    <CertificateCard
                                        cert={cert}
                                        onOpen={setSelectedCert}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Toggle Button */}
            <div className="mt-12 flex justify-center px-6">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group relative flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] px-8 py-3 rounded-full font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 contact-button"
                >
                    {isExpanded ? (
                        <>
                            <X size={18} />
                            Sembunyikan
                        </>
                    ) : (
                        <>
                            <span>Tampilkan Semua</span>
                            <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5 rounded-md ml-1">
                                {certificates.length}
                            </span>
                        </>
                    )}
                </button>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl max-h-[90vh] glass rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row"
                        >
                            {/* Image Part */}
                            <div className="relative flex-1 bg-black/40 min-h-[300px] md:min-h-0 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={selectedCert.image_url}
                                    alt={selectedCert.title}
                                    width={1200}
                                    height={900}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>

                            {/* Info Part */}
                            <div className="p-6 md:w-80 bg-black/20 backdrop-blur-md flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
                                            {selectedCert.category}
                                        </span>
                                        <button
                                            onClick={() => setSelectedCert(null)}
                                            className="text-white/50 hover:text-white transition-colors p-1"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-2">
                                        {selectedCert.title}
                                    </h2>
                                    <p className="text-[var(--text-secondary)] text-sm mb-4">
                                        {selectedCert.issuer} • {selectedCert.date}
                                    </p>
                                </div>

                                {selectedCert.credential_url && selectedCert.credential_url !== "#" && (
                                    <a
                                        href={selectedCert.credential_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--bg)] rounded-xl px-6 py-3 font-bold hover:bg-[var(--accent-dark)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <ExternalLink size={18} />
                                        Verifikasi Kredensial
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
