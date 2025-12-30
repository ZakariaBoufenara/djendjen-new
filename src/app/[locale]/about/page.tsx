'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Gauge, Truck, Warehouse, PackageSearch, Banknote, Clock, ShieldAlert, Zap, Trophy, Globe, Users } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

// Animations
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } as any }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function About() {
    const t = useTranslations('About');
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', overflowX: 'hidden' }}>
            <Navbar />

            {/* Modern Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0f172a',
                color: 'white',
                overflow: 'hidden',
                paddingTop: '4rem'
            }}>
                {/* Background Effects */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.2
                }} />
                <div style={{
                    position: 'absolute', top: '20%', right: '-10%',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                    filter: 'blur(80px)', opacity: 0.15
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px' }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            variants={fadeInUp}
                            style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '2rem',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            {t('title').includes('&') ? (
                                <>
                                    <span style={{ color: 'white' }}>{t('title').split('&')[0]}</span>
                                    <span style={{ color: 'var(--accent)' }}> & </span>
                                    <span style={{ color: 'white' }}>{t('title').split('&')[1]}</span>
                                </>
                            ) : (
                                <span style={{ color: 'white' }}>{t('title')}</span>
                            )}
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            style={{
                                fontSize: '1.25rem',
                                color: '#94a3b8',
                                lineHeight: 1.8,
                                marginBottom: '3rem'
                            }}
                        >
                            {t('history')}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section - Floating */}
            <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'white',
                        borderRadius: '24px',
                        padding: '3rem',
                        boxShadow: '0 20px 40px -5px rgba(0,0,0,0.1)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        textAlign: 'center'
                    }}
                >
                    {[
                        { val: t('stats.years.value'), label: t('stats.years.label'), icon: Trophy },
                        { val: t('stats.fleets.value'), label: t('stats.fleets.label'), icon: Truck },
                        { val: t('stats.clients.value'), label: t('stats.clients.label'), icon: Users },
                        { val: t('stats.coverage.value'), label: t('stats.coverage.label'), icon: Globe },
                    ].map((stat, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                                <stat.icon size={32} strokeWidth={1.5} />
                            </div>
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-dark)', lineHeight: 1 }}>
                                {stat.val}
                            </span>
                            <span style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Core Values - Bento Style */}
            <section className="section" style={{ padding: '8rem 0', backgroundColor: '#F8FAFC' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                            {t('valuesSection.title')}
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>{t('valuesSection.subtitle')}</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {['reliability', 'integrity', 'efficiency'].map((val, idx) => {
                            const icons = { reliability: ShieldCheck, integrity: HeartHandshake, efficiency: Gauge };
                            const Icon = icons[val as keyof typeof icons];

                            return (
                                <motion.div
                                    key={val}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    style={{
                                        background: 'white',
                                        padding: '2.5rem',
                                        borderRadius: '20px',
                                        border: '1px solid #e2e8f0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
                                    }}
                                >
                                    <div style={{
                                        width: '64px', height: '64px',
                                        borderRadius: '16px',
                                        background: 'var(--surface)',
                                        color: 'var(--primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <Icon size={32} />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                                        {t(`valuesSection.${val}.title`)}
                                    </h3>
                                    <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                                        {t(`valuesSection.${val}.desc`)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section style={{ padding: '8rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ position: 'relative', borderLeft: '2px solid #e2e8f0', paddingLeft: '3rem' }}>
                            {[
                                { year: t('timeline.item1.year'), title: t('timeline.item1.title'), desc: t('timeline.item1.desc') },
                                { year: t('timeline.item2.year'), title: t('timeline.item2.title'), desc: t('timeline.item2.desc') },
                                { year: t('timeline.item3.year'), title: t('timeline.item3.title'), desc: t('timeline.item3.desc') },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                    style={{ marginBottom: '4rem', position: 'relative' }}
                                >
                                    <div style={{
                                        position: 'absolute', left: '-3.6rem', top: '0',
                                        width: '1.2rem', height: '1.2rem',
                                        borderRadius: '50%',
                                        background: 'white',
                                        border: '4px solid var(--accent)'
                                    }} />

                                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
                                        {item.year}
                                    </span>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
