'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function RoadServicesSection() {
    const t = useTranslations('Services');

    const services = [
        { key: 'transport', icon: '🚛' },
        { key: 'handling', icon: '📦' },
        { key: 'pickup', icon: '📍' }, // Added pickup
        { key: 'recovery', icon: '🔧' } // Added recovery
    ];

    return (
        <section className="section" style={{
            position: 'relative',
            padding: '8rem 0',
            overflow: 'hidden'
        }}>
            {/* Background Image with Premium Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: "url('/images/road-boxes-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
            }} />

            {/* Gradient Overlay for Readability (Dark Blue/Grey Theme) */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(105deg, rgba(10, 15, 30, 0.95) 0%, rgba(10, 15, 30, 0.85) 50%, rgba(10, 15, 30, 0.4) 100%)',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 style={{
                            color: 'var(--accent)',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{ width: '30px', height: '2px', background: 'var(--accent)' }} />
                            {t('subtitle')}
                        </h4>
                        <h2 style={{
                            color: '#ffffff',
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            fontFamily: '"Measter Demo Font", sans-serif'
                        }}>
                            {t('title')}
                        </h2>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            maxWidth: '500px'
                        }}>
                            {t('intro')}
                        </p>

                        <div style={{ marginTop: '2.5rem' }}>
                            <a href="/services" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                                {t('viewAll')}
                            </a>
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{service.icon}</div>
                                <h3 style={{
                                    color: '#ffffff',
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    margin: 0
                                }}>
                                    {t(`${service.key}.title`)}
                                </h3>
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.5,
                                    margin: 0
                                }}>
                                    {t(`${service.key}.desc`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
