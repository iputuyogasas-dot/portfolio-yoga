export type Project = {
    id: string;
    title: string;
    short_description: string;
    thumbnail_image_url: string;
    live_demo_url: string;
    source_code_url: string;
    display_order: number;
    tech_stack: string[]; // skill names (from PROJECT_SKILL -> SKILL.name)
};

export const projects: Project[] = [
    {
        id: "p1",
        title: "Sistem Informasi Desa",
        short_description:
            "Platform digital untuk mengelola administrasi kependudukan, galeri, dan profil desa secara terpusat.",
        thumbnail_image_url: "/images/projects/desa.webp",
        live_demo_url: "https://desa.katin.t.oldvibescam.my.id/",
        source_code_url: "https://github.com/iputuyogasas-dot/Sistem-Informasi-Desa-Digital1",
        display_order: 1,
        tech_stack: ["Laravel", "MySQL", "Tailwind CSS", "PHP"],
    },
    {
        id: "p2",
        title: "Portfolio Website",
        short_description:
            "Website portofolio pribadi dengan Single Page Application berbasis Next.js yang cepat dan responsif.",
        thumbnail_image_url: "/images/projects/portfolio.webp",
        live_demo_url: "#",
        source_code_url: "https://github.com/yogasastrawan/portfolio",
        display_order: 2,
        tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        id: "p3",
        title: "Aplikasi Manajemen Café",
        short_description:
            "Sistem terdistribusi berbasis client-server untuk manajemen pesanan dan menu kafe secara real-time.",
        thumbnail_image_url: "/images/projects/cafe.webp",
        live_demo_url: "#",
        source_code_url: "https://github.com/yogasastrawan/cafe-management",
        display_order: 3,
        tech_stack: ["Node.js", "Express.js", "MySQL", "JavaScript"],
    },
    {
        id: "p4",
        title: "Rini Chatbot",
        short_description:
            "AI chatbot berbasis Gemini API dengan memori percakapan persisten untuk asisten virtual cerdas.",
        thumbnail_image_url: "/images/projects/rini.webp",
        live_demo_url: "#",
        source_code_url: "https://github.com/yogasastrawan/rini-chatbot",
        display_order: 4,
        tech_stack: ["Python", "React", "Next.js", "TypeScript"],
    },
];
