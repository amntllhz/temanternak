import { motion } from "motion/react";

export function Stagger({ children, className, delay = 0, gap = 0.1 }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: gap, delayChildren: delay } },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, bounce = 0.5, y = 32 }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        opacity: { duration: 0.25, ease: "easeOut" },
                        y: { type: "spring", bounce, duration: 0.8 },
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}