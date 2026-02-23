import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = {
    variant?: "primary" | "secondary" | "ghost";
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
    variant?: "primary" | "secondary" | "ghost";
    children: ReactNode;
    className?: string;
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const styles = {
    base: "inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-all duration-200 cursor-pointer",
    primary:
        "bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-dark)] shadow-lg shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/40 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
        "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 active:translate-y-0",
    ghost:
        "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)] px-4",
};

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`${styles.base} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export function LinkButton({ variant = "primary", children, className = "", href, ...props }: AnchorProps) {
    return (
        <a
            href={href}
            className={`${styles.base} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </a>
    );
}
