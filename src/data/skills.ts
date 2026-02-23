export type Skill = {
    id: string;
    name: string;
    category: "Bahasa Pemrograman" | "Framework" | "Tools";
    icon_name: string;
};

export const skills: Skill[] = [
    // Bahasa Pemrograman
    { id: "s1", name: "JavaScript", category: "Bahasa Pemrograman", icon_name: "js" },
    { id: "s2", name: "TypeScript", category: "Bahasa Pemrograman", icon_name: "ts" },
    { id: "s3", name: "PHP", category: "Bahasa Pemrograman", icon_name: "php" },
    { id: "s4", name: "Python", category: "Bahasa Pemrograman", icon_name: "py" },
    { id: "s5", name: "HTML5", category: "Bahasa Pemrograman", icon_name: "html" },
    { id: "s6", name: "CSS3", category: "Bahasa Pemrograman", icon_name: "css" },

    // Framework
    { id: "s7", name: "React", category: "Framework", icon_name: "react" },
    { id: "s8", name: "Next.js", category: "Framework", icon_name: "nextjs" },
    { id: "s9", name: "Laravel", category: "Framework", icon_name: "laravel" },
    { id: "s10", name: "Node.js", category: "Framework", icon_name: "nodejs" },
    { id: "s11", name: "Tailwind CSS", category: "Framework", icon_name: "tailwind" },
    { id: "s12", name: "Express.js", category: "Framework", icon_name: "express" },

    // Tools
    { id: "s13", name: "Git", category: "Tools", icon_name: "git" },
    { id: "s14", name: "GitHub", category: "Tools", icon_name: "github" },
    { id: "s15", name: "Figma", category: "Tools", icon_name: "figma" },
    { id: "s16", name: "MySQL", category: "Tools", icon_name: "mysql" },
    { id: "s17", name: "PostgreSQL", category: "Tools", icon_name: "postgres" },
    { id: "s18", name: "Docker", category: "Tools", icon_name: "docker" },
    { id: "s19", name: "VS Code", category: "Tools", icon_name: "vscode" },
    { id: "s20", name: "Antigravity", category: "Tools", icon_name: "antigravity" },
];
