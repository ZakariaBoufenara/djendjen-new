'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/routing';

const slides = [
    {
        id: 1,
        src: '/images/slider-truck.png',
        alt: 'Reliable Trucking Fleet',
        title: 'Nationwide Transportation',
        subtitle: 'Connecting every corner of Algeria with our modern, reliable fleet.',
        cta: 'Track Shipment'
    },
    {
        id: 2,
        src: '/images/slider-warehouse.png',
        alt: 'Efficient Warehousing',
        title: 'Smart Warehousing',
        subtitle: 'Secure, temperature-controlled storage solutions for your peace of mind.',
        cta: 'View Facilities'
    },
    {
        id: 3,
        src: '/images/slider-delivery.png',
        alt: 'Last Mile Delivery',
        title: 'Precision Delivery',
        subtitle: 'Ensuring the final mile is the fastest mile with our expert couriers.',
        cta: 'Get Quote'
    },
];

export function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ position: 'absolute', inset: 0 }}
                >
                    <Image
                        src={slides[index].src}
                        alt={slides[index].alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    {/* Darker Cinematic Overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 60%, rgba(15, 23, 42, 0.1) 100%)' // Navy/Dark Blue tint
                    }} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
