type Props = {
    title: string;
    subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
    return (
        <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-3 text-[var(--text-secondary)] max-w-xl mx-auto text-base">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#7c6fff]" />
        </div>
    );
}
