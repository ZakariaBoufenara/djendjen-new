import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/Animations';

export default function Contact() {
    const t = useTranslations('Contact');

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
                    <div style={{ display: 'flex', gap: '4rem' }}>
                        {/* Contact Form */}
                        <div style={{ flex: 1 }}>
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

                        {/* Contact Info */}
                        <div style={{ flex: 1, padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', height: 'fit-content' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Address</div>
                                <div style={{ color: 'var(--text-muted)' }}>{t('info.address')}</div>
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Phone</div>
                                <div style={{ color: 'var(--text-muted)' }}>{t('info.phone')}</div>
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Email</div>
                                <div style={{ color: 'var(--text-muted)' }}>{t('info.email')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
