'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function ZLayoutSection() {
    const t = useTranslations('HomePage');

    const blocks = [
        {
            id: 'intro',
            title: t('Intro.title'),
            text: t('Intro.subtitle'),
            image: '/images/z-transit-map-v2.png', // Updated to user's v2 image
            layout: 'text-left' // Text Left, Image Right
        },
        {
            id: 'services',
            title: t('ServicesIntro.title'),
            text: t('ServicesIntro.subtitle'),
            image: '/images/z-services-boxes.jpg', // Updated to user's new uploaded image
            layout: 'image-left' // Image Left, Text Right
        }
    ];

    return (
        <section className="section" style={{ padding: '0', backgroundColor: 'transparent' }}>
            <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
                {blocks.map((block, index) => (
                    <div
                        key={block.id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            alignItems: 'center',
                            minHeight: '600px', // Substantial height for cinematic feel
                            // Radial Gradient with #D48034 (Copper/Orange)
                            // Glassy transparent backgrounds for blocks
                            background: index % 2 === 0
                                ? 'rgba(255, 255, 255, 0.03)'
                                : 'rgba(255, 255, 255, 0.08)',
                            direction: 'ltr' // FORCE LTR LAYOUT
                        }}
                        className="z-layout-grid"
                    >
                        {/* Text Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                padding: '4rem 6rem',
                                order: block.layout === 'text-left' ? 1 : 2, // 1 = Left, 2 = Right
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                            className="z-text-column"
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: 800,
                                color: '#ffffff',
                                marginBottom: '1.5rem',
                                lineHeight: 1.1,
                                fontFamily: '"Measter Demo Font", sans-serif'
                            }}>
                                {block.title}
                            </h2>
                            <p style={{
                                fontSize: '1.25rem',
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: 1.6,
                                maxWidth: '600px'
                            }}>
                                {block.text}
                            </p>
                        </motion.div>

                        {/* Image Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                minHeight: '400px',
                                order: block.layout === 'text-left' ? 2 : 1, // 2 = Right, 1 = Left
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '5rem' // Increased padding to reduce image width
                            }}
                            className="z-image-column"
                        >
                            <motion.div
                                whileHover={{
                                    y: -8, // Lift up effect
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Deeper hovering shadow
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    // "Hanging on wall" effect: 
                                    // 1. Subtle border for edge definition
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    // 2. Multi-layered shadow for realistic depth (Ambient + Direct)
                                    boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.05)',
                                    cursor: 'pointer',
                                    backgroundColor: 'white' // Ensure frame is opaque
                                }}
                            >
                                <Image
                                    src={block.image}
                                    alt={block.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="z-image-hover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Responsive Styles */}
            <style jsx global>{`
                @media (max-width: 991px) {
                    .z-layout-grid {
                        grid-template-columns: 1fr !important;
                        min-height: auto !important;
                    }
                    /* On mobile, stack Image TOP, Text BOTTOM for visual flow */
                     .z-image-column {
                        order: 1 !important; /* Always First */
                        height: 300px !important;
                        min-height: 300px !important;
                    }
                    .z-text-column {
                        order: 2 !important; /* Always Second */
                        padding: 3rem 2rem !important;
                        text-align: center; /* Center text on mobile often looks better */
                    }
                }
                .z-image-hover {
                    transition: transform 1.5s ease;
                }
                .z-layout-grid:hover .z-image-hover {
                    transform: scale(1.05); /* Subtle zoom on hover */
                }
            `}</style>
        </section>
    );
}
