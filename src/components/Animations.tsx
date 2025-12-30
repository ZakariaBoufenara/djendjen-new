'use client';

import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// --- Fade In Animation ---
interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    style?: React.CSSProperties;
}

export function FadeIn({ children, delay = 0, direction = 'up', className, style }: FadeInProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const variants: any = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom smooth ease
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

// --- Stagger Container ---
export function StaggerContainer({ children, className, style, delay = 0 }: { children: React.ReactNode, className?: string, style?: React.CSSProperties, delay?: number }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: delay,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const item: any = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <motion.div variants={item} className={className} style={style}>
            {children}
        </motion.div>
    );
}

// --- Hover Card ---
export function HoverCard({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
    return (
        <motion.div
            className={className}
            style={style}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        >
            {children}
        </motion.div>
    )
}


// --- Count Up Animation ---
export function CountUp({ to, suffix = '', duration = 2 }: { to: number, suffix?: string, duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: duration * 1000
    });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(latest.toLocaleString() + suffix);
        });
    }, [rounded, suffix]);

    return <span ref={ref}>{displayValue}</span>;
}
