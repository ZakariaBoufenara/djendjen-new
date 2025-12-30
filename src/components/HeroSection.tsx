'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

interface HeroProps {
    ctaText: string;
    servicesText: string;
}



export function HeroSection({ ctaText, servicesText }: HeroProps) {

    return (
        <motion.section
            initial="initial"
            whileHover="hover"
            className="section"
            style={{
                paddingTop: 'calc(var(--header-height) + 2rem)',
                paddingBottom: '4rem',
                backgroundColor: 'transparent', // Transparent to show main gradient
                overflow: 'hidden',
                position: 'relative',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* Background Image - Warehouse & Icons */}
            <motion.div
                variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 }
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'url("/images/hero-bg-icons.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}
            />

            {/* Warm Sunset Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(20, 10, 0, 0.3), rgba(255, 120, 0, 0.15))',
                zIndex: 1,
                mixBlendMode: 'overlay'
            }} />

            {/* Minimal Overlay - almost invisible */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    height: '100%',
                    direction: 'ltr' // FORCE LTR LAYOUT
                }}>

                    {/* Left Side: Content Overlay - LOCKED LEFT */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                // Refined Glass Overlay
                                backgroundColor: 'rgba(255, 255, 255, 0.04)', // Very low opacity to avoid 'heavy' look
                                backdropFilter: 'blur(12px)', // Significant blur increase
                                WebkitBackdropFilter: 'blur(12px)',
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',

                                width: '100%',
                                maxWidth: '650px',
                                textAlign: 'left', // Align text to LEFT
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start', // Align items to START
                                // Ensure strict LTR positioning
                                direction: 'ltr'
                            }}
                        >

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '60px' }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                style={{ height: '6px', backgroundColor: 'var(--accent)', marginBottom: '1.5rem', borderRadius: '3px' }}
                            />

                            {/* French (Top) */}
                            <motion.h1
                                whileHover={{ scale: 1.02, textShadow: "0 0 30px rgba(255, 255, 255, 0.6), 0 4px 15px rgba(0,0,0,0.6)" }}
                                style={{
                                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                                    fontWeight: 800,
                                    color: 'var(--primary)', // Brand Blue
                                    fontFamily: '"Measter Demo Font", sans-serif', // Custom Brand Font
                                    lineHeight: 1.1,
                                    marginBottom: '0.75rem',
                                    letterSpacing: '-0.02em',
                                    // White glow for contrast + Dark shadow for depth
                                    textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 4px 10px rgba(0,0,0,0.5)',
                                    cursor: 'default'
                                }}>
                                Personne ne peut nous apprendre notre métier
                            </motion.h1>

                            {/* English (Middle) */}
                            <motion.h2
                                whileHover={{ scale: 1.02, color: '#ffffff' }}
                                style={{
                                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                                    fontWeight: 500,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    marginBottom: '1rem',
                                    lineHeight: 1.3,
                                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                    cursor: 'default'
                                }}>
                                No one can teach us our craft
                            </motion.h2>

                            {/* Arabic (Bottom) */}
                            <motion.h1
                                whileHover={{ scale: 1.02, textShadow: "0 0 20px rgba(255, 102, 0, 0.6)" }}
                                style={{
                                    fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                                    fontWeight: 800,
                                    color: 'var(--accent)',
                                    lineHeight: 1.2,
                                    marginBottom: '2rem',
                                    direction: 'rtl',
                                    fontFamily: 'Tahoma, Arial, sans-serif',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                    width: '100%', // Ensure RTL text takes full width but aligns as per container
                                    textAlign: 'right', // Arabic looks better right-aligned internally, or keep it left? 
                                    cursor: 'default'
                                }}>
                                لا أحد يعلّمنا مهنتنا
                            </motion.h1>

                            {/* Subtitle */}
                            <p style={{
                                fontSize: '1.35rem',
                                color: '#ffffff',
                                fontWeight: 500,
                                marginBottom: '2.5rem',
                                lineHeight: 1.5,
                                maxWidth: '100%',
                                textShadow: '0 2px 4px rgba(0,0,0,0.4)'
                            }}>
                                Experience, mastery, and confidence in freight transportation.
                            </p>

                            {/* Buttons */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: '0.875rem 2.5rem', fontWeight: 600 }}>
                                    {ctaText}
                                </Link>
                                <Link href="/services" className="btn" style={{
                                    padding: '0.875rem 2.5rem',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    color: 'white',
                                    fontWeight: 600,
                                    background: 'transparent'
                                }}>
                                    {servicesText}
                                </Link>
                            </div>

                        </motion.div>
                    </div>

                    {/* Right Side: Empty to show background */}
                    <div></div>
                </div>
            </div>

            {/* CSS for responsive mobile adjustments */}
            <style jsx global>{`
                @media (max-width: 991px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    /* On mobile, user wants Frame FIRST (top), Text SECOND (bottom) */
                    /* Grid default order follows HTML structure: Left(Frame) is first, Right(Text) is second. */
                    /* So no 'order' change needed, just single column. */
                    
                    /* However, verify text alignment on mobile */
                    /* "Text below, still right-aligned" - covered by container alignment */
                }
            `}</style>
        </motion.section>
    );
}
