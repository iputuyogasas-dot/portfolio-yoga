export type Certificate = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credential_url: string;
    image_url: string;
    category: string;
};

export const certificates: Certificate[] = [
    {
        id: "c1",
        title: "Cybersecurity Essentials",
        issuer: "CISCO",
        date: "2024",
        credential_url: "#",
        image_url: "/images/certificates/dicoding-react.webp",
        category: "Cybersecurity",
    },
    {
        id: "c2",
        title: "Third place in poster competition",
        issuer: "ArchiLand",
        date: "2024",
        credential_url: "#",
        image_url: "/images/certificates/dicoding-backend.webp",
        category: "Poster Competition",
    },
    {
        id: "c3",
        title: "1st place winner in poster competition",
        issuer: "Teknologi Industri Pertanian",
        date: "2025",
        credential_url: "#",
        image_url: "/images/certificates/dicoding-web.webp",
        category: "Poster Competition",
    },
    {
        id: "c4",
        title: "Overview of AI",
        issuer: "Udemy",
        date: "2025",
        credential_url: "#",
        image_url: "/images/certificates/udemy-php.webp",
        category: "AI",
    },
    {
        id: "c5",
        title: "Third place in poster competition",
        issuer: "UKM SAR UPR",
        date: "2025",
        credential_url: "#",
        image_url: "/images/certificates/fcc-js.webp",
        category: "Poster Competition",
    },
    {
        id: "c6",
        title: "Dasar Pemrograman C++",
        issuer: "freeCodeCamp",
        date: "2024",
        credential_url: "#",
        image_url: "/images/certificates/fcc-rwd.webp",
        category: "C++",
    },
];
