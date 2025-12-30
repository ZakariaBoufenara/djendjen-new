import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/Animations';

export default function Coverage() {
    const t = useTranslations('Coverage');

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
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '4rem' }}>
                        <FadeIn direction="left" style={{ flex: 1 }}>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem' }}>{t('desc')}</p>
                            <div style={{ padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--error)', borderRadius: 'var(--radius-md)', fontWeight: 500 }}>
                                {t('disclaimer')}
                            </div>
                        </FadeIn>
                        <FadeIn direction="right" style={{ flex: 1, position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <img
                                    src="/images/coverage-map-blue.png"
                                    alt="Coverage Map"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Contain to show full map details
                                />
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.4} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                        {/* List of wilayas - using a simplified list for now */}
                        {Array.from({ length: 58 }, (_, i) => (
                            <div key={i} style={{ padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                                {i + 1 < 10 ? `0${i + 1}` : i + 1} - Wilaya
                            </div>
                        ))}
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
