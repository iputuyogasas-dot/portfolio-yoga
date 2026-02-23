"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Sertifikat", href: "#certificates" },
    { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll spy
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive("#" + entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((s) => observer.observe(s));
        return () => sections.forEach((s) => observer.unobserve(s));
    }, []);

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border)] shadow-lg"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollTo("#hero")}
                    className="font-bold text-xl tracking-tight gradient-text hover:opacity-80 transition-opacity"
                    aria-label="Back to top"
                >
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => scrollTo(link.href)}
                                className={`text-sm font-medium transition-colors relative group pb-1 ${active === link.href
                                    ? "text-[var(--accent)]"
                                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute bottom-0 left-0 h-px bg-[var(--accent)] transition-all duration-300 ${active === link.href ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border)]"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className={`w-full text-left text-sm font-medium transition-colors py-2 ${active === link.href
                                            ? "text-[var(--accent)]"
                                            : "text-[var(--text-secondary)]"
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
