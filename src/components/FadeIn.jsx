import { motion } from "motion/react";

export default function FadeIn({ children, duration = 0.25, delay = 0, y = 12, x = 0, className }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}