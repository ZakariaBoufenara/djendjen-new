import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/Animations';
import { Link } from '@/i18n/routing';
import { ShieldCheck, HeartHandshake, Gauge } from 'lucide-react';

export default function About() {
    const t = useTranslations('About');

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Redesigned Hero Header */}
            {/* Redesigned Hero Header */}
            <section style={{
                position: 'relative',
                paddingTop: 'calc(var(--header-height) + 6rem)', // Increased padding for impact
                paddingBottom: '6rem',
                backgroundColor: 'var(--surface)',
                overflow: 'hidden'
            }}>
                {/* Background Image & Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 0
                }}>
                    <img
                        src="/images/about-hero-bg.png"
                        alt="Logistics Background"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.65)', // Dark overlay for text readability
                        backdropFilter: 'blur(2px)'
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <span style={{
                            display: 'inline-block',
                            color: 'var(--accent)',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            fontSize: '0.875rem',
                            marginBottom: '1rem'
                        }}>
                            {t('subtitle')}
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'end' }}>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: 800,
                                color: 'white',
                                marginBottom: '1.5rem',
                                lineHeight: 1.1,
                                maxWidth: '800px'
                            }}>
                                {t('hero.title')}
                            </h1>
                            <p style={{
                                fontSize: '1.25rem',
                                lineHeight: 1.7,
                                color: 'rgba(255, 255, 255, 0.9)',
                                paddingBottom: '1.5rem',
                                borderLeft: '3px solid var(--accent)',
                                paddingLeft: '1.5rem'
                            }}>
                                {t('hero.subtitle')}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Key Stats Section */}
            <section style={{ backgroundColor: 'transparent', padding: '4rem 0', color: 'white' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '3rem',
                            textAlign: 'center'
                        }}>
                            {[
                                { val: t('stats.years.value'), label: t('stats.years.label') },
                                { val: t('stats.fleets.value'), label: t('stats.fleets.label') },
                                { val: t('stats.clients.value'), label: t('stats.clients.label') },

                            ].map((stat, idx) => (
                                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{
                                        fontSize: '3.5rem',
                                        fontWeight: 800,
                                        lineHeight: 1,
                                        marginBottom: '0.5rem',
                                        color: 'white'
                                    }}>
                                        {stat.val}
                                    </span>
                                    <span style={{
                                        fontSize: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        opacity: 0.8
                                    }}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content Sections */}
            <section className="section" style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>

                        {/* LEFT COLUMN: Story & Timeline */}
                        <div>
                            <FadeIn delay={0.2}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: 'white' }}>
                                    Our Journey
                                </h2>
                                <div style={{
                                    fontSize: '1.125rem',
                                    lineHeight: 1.8,
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    marginBottom: '3rem'
                                }}>
                                    {t('history')}
                                </div>

                                {/* Timeline Component */}
                                <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(255, 255, 255, 0.2)' }}>
                                    {[
                                        { year: t('timeline.item1.year'), title: t('timeline.item1.title'), desc: t('timeline.item1.desc') },
                                        { year: t('timeline.item2.year'), title: t('timeline.item2.title'), desc: t('timeline.item2.desc') },
                                        { year: t('timeline.item3.year'), title: t('timeline.item3.title'), desc: t('timeline.item3.desc') },
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ position: 'relative', marginBottom: '3rem' }}>
                                            {/* Dot */}
                                            <div style={{
                                                position: 'absolute',
                                                left: '-2.6rem',
                                                top: '0.25rem',
                                                width: '1.25rem',
                                                height: '1.25rem',
                                                borderRadius: '50%',
                                                backgroundColor: 'white',
                                                border: '4px solid rgba(255, 255, 255, 0.2)'
                                            }} />

                                            <span style={{
                                                display: 'block',
                                                fontSize: '0.875rem',
                                                fontWeight: 700,
                                                color: 'var(--accent)',
                                                marginBottom: '0.25rem'
                                            }}>
                                                {item.year}
                                            </span>
                                            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                                                {item.title}
                                            </h4>
                                            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6 }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        {/* RIGHT COLUMN: Visuals & Values */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                            {/* Integrated Main Image */}
                            <FadeIn delay={0.3} style={{
                                position: 'relative',
                                height: '350px',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src="/images/hero-bg-final.png"
                                    alt="Logistics Operations"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    padding: '2rem'
                                }}>
                                    <p style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>
                                        {t('experience')}
                                    </p>
                                </div>
                            </FadeIn>

                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section - NEW */}
            <section className="section" style={{
                position: 'relative',
                backgroundColor: 'var(--primary-dark)', // Fallback color
                borderTop: '1px solid var(--border)',
                padding: '6rem 0'
            }}>
                {/* Background Image & Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    zIndex: 0
                }}>
                    <img
                        src="/images/values-bg-stamp.png"
                        alt="Logistics Background"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 51, 160, 0.75)', // Reduced opacity to show stamp details
                        backdropFilter: 'blur(2px)'
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
                                {t('valuesSection.title')}
                            </h2>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                                {t('valuesSection.subtitle')}
                            </p>
                        </div>
                    </FadeIn>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {['reliability', 'integrity', 'efficiency'].map((val, idx) => (
                            <FadeIn key={val} delay={idx * 0.1}>
                                <div style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass card
                                    backdropFilter: 'blur(10px)',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'default',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                                    className="value-card"
                                >
                                    {/* Icon - Lucide React */}
                                    <div style={{
                                        display: 'inline-flex',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light white bg for icon
                                        color: 'white',
                                        marginBottom: '1.5rem',
                                    }}>
                                        {val === 'reliability' && <ShieldCheck size={32} strokeWidth={1.5} />}
                                        {val === 'integrity' && <HeartHandshake size={32} strokeWidth={1.5} />}
                                        {val === 'efficiency' && <Gauge size={32} strokeWidth={1.5} />}
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
                                        {t(`valuesSection.${val}.title`)}
                                    </h3>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                                        {t(`valuesSection.${val}.desc`)}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
