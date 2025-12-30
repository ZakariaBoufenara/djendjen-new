import { Navbar } from '@/components/Navbar';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/Animations';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
    const t = useTranslations('Contact');
    const locale = useLocale();

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <section className="section" style={{ paddingTop: '10rem', paddingBottom: '3rem', backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <FadeIn direction="down">
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary)' }}>{t('title')}</h1>
                        <p style={{ fontSize: '1.5rem', color: 'var(--secondary)', fontWeight: 600 }}>{t('subtitle')}</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', gap: '4rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* Contact Form */}
                        <div style={{ flex: '1 1 500px' }}>
                            <FadeIn delay={0.2}>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('form.name')}</label>
                                        <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('form.email')}</label>
                                        <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('form.phone')}</label>
                                        <input type="tel" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>{t('form.message')}</label>
                                        <textarea rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
                                    </div>
                                    <button className="btn btn-primary">{t('form.submit')}</button>
                                </form>
                            </FadeIn>
                        </div>

                        {/* Contact Info Section */}
                        <div style={{ flex: '1 1 400px' }}>
                            <FadeIn delay={0.3}>
                                <div style={{
                                    padding: '3rem',
                                    backgroundColor: 'white',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                    border: '1px solid var(--border)',
                                    height: '100%'
                                }}>
                                    <h2 style={{
                                        fontSize: '1.75rem',
                                        fontWeight: 800,
                                        color: 'var(--primary)',
                                        marginBottom: '2.5rem',
                                        textAlign: locale === 'ar' ? 'right' : 'left'
                                    }}>
                                        {t('info.labels.address')}
                                    </h2>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                        {/* Address Item */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'flex-start',
                                            flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
                                        }}>
                                            <div style={{
                                                width: '48px', height: '48px',
                                                backgroundColor: 'rgba(31, 78, 121, 0.1)',
                                                borderRadius: '12px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'var(--primary)', flexShrink: 0
                                            }}>
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', textAlign: locale === 'ar' ? 'right' : 'left' }}>
                                                    {t('info.labels.address')}
                                                </div>
                                                <div style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.5, textAlign: locale === 'ar' ? 'right' : 'left', direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
                                                    {t('info.address')}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Item */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'flex-start',
                                            flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
                                        }}>
                                            <div style={{
                                                width: '48px', height: '48px',
                                                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                                borderRadius: '12px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'var(--accent)', flexShrink: 0
                                            }}>
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', textAlign: locale === 'ar' ? 'right' : 'left' }}>
                                                    {t('info.labels.phone')}
                                                </div>
                                                <div style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 500, textAlign: locale === 'ar' ? 'right' : 'left', direction: 'ltr' }}>
                                                    {t('info.phone')}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email Item */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            alignItems: 'flex-start',
                                            flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
                                        }}>
                                            <div style={{
                                                width: '48px', height: '48px',
                                                backgroundColor: 'rgba(31, 78, 121, 0.1)',
                                                borderRadius: '12px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'var(--primary)', flexShrink: 0
                                            }}>
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', textAlign: locale === 'ar' ? 'right' : 'left' }}>
                                                    {t('info.labels.email')}
                                                </div>
                                                <div style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 500, textAlign: locale === 'ar' ? 'right' : 'left' }}>
                                                    {t('info.email')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
