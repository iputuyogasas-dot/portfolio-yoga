"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

const variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
