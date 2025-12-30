import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/Animations';
import { Truck, Warehouse, PackageSearch, Banknote, ArrowRight } from 'lucide-react';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        { key: 'transport', icon: Truck, color: 'var(--primary)' },
        { key: 'handling', icon: Warehouse, color: 'var(--accent)' },
        { key: 'pickup', icon: PackageSearch, color: '#10B981' },
        { key: 'recovery', icon: Banknote, color: '#FFD700' }
    ];

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <section className="service-hero" style={{ paddingTop: 'var(--header-height)' }}>
                <div className="service-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
                    <FadeIn direction="down">
                        <h1 style={{
                            fontSize: 'clamp(3rem, 5vw, 5rem)',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            color: 'white',
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em'
                        }}>
                            {t('title')}
                        </h1>
                        <p style={{
                            fontSize: '1.5rem',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 600,
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            {t('subtitle')}
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    {/* Intro text if needed, or just jump to list */}

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {services.map((service, index) => (
                            <FadeIn key={service.key} delay={index * 0.1}>
                                <div
                                    className="service-row group"
                                    style={{
                                        position: 'relative',
                                        padding: '4rem 0',
                                        borderTop: '1px solid var(--border)',
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                        gap: '2rem',
                                        alignItems: 'start',
                                        transition: 'all 0.4s ease',
                                        direction: 'ltr'
                                    }}
                                >
                                    {/* Column 1: Number & Title */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <span style={{
                                            fontSize: '4rem',
                                            fontWeight: 800,
                                            color: 'rgba(0, 51, 160, 0.08)',
                                            lineHeight: 1,
                                            fontFamily: 'var(--font-outfit)'
                                        }}>
                                            {`0${index + 1}`}
                                        </span>
                                        <h3 style={{
                                            fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)',
                                            fontWeight: 800,
                                            color: 'var(--text-main)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '-0.02em',
                                            lineHeight: 1.1,
                                            maxWidth: '90%'
                                        }}>
                                            {t(`${service.key}.title`)}
                                        </h3>
                                    </div>

                                    {/* Column 2: Description, Icon, CTA */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2rem',
                                        paddingTop: '3rem', // Align aesthetically with the title
                                        position: 'relative'
                                    }}>
                                        {/* Floating Icon - Subtle */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            opacity: 0.1,
                                            transform: 'translate(20%, -20%) rotate(-10deg)',
                                            transition: 'transform 0.5s ease, opacity 0.5s ease'
                                        }} className="service-icon-bg">
                                            <service.icon size={180} color="var(--primary)" strokeWidth={0.5} />
                                        </div>

                                        <p style={{
                                            fontSize: '1.25rem',
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.7,
                                            maxWidth: '550px',
                                            position: 'relative',
                                            zIndex: 1,
                                            fontWeight: 400
                                        }}>
                                            {t(`${service.key}.desc`)}
                                        </p>


                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
