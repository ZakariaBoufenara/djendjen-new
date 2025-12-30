import { Navbar } from '@/components/Navbar';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { HeroSection } from '@/components/HeroSection';
import { ZLayoutSection } from '@/components/ZLayoutSection';
import { RoadServicesSection } from '@/components/RoadServicesSection';
import { FadeIn, CountUp } from '@/components/Animations';

export default function Home() {
  const t = useTranslations('HomePage');
  // Navigation translation used inside Navbar now

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <HeroSection
        ctaText={t('heroVideo.ctaPrimary')}
        servicesText={t('heroVideo.ctaSecondary')}
      />

      {/* Alternating Z-Layout Section (Intro + Services) */}
      <ZLayoutSection />

      {/* Road Services Section (Expertise) */}
      <RoadServicesSection />

      {/* Trust & Stats Section */}
      <section className="section" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <FadeIn className="grid-cols-3">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1, marginBottom: '0.5rem' }}>
                <CountUp to={10} suffix="+" />
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff' }}>{t('stats.experience')}</div>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)', margin: '1rem 0' }}></div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>{t('stats.experienceDesc')}</p>
            </div>



            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' }}>
                <CountUp to={100} suffix="%" />
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff' }}>{t('stats.reliability')}</div>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)', margin: '1rem 0' }}></div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>{t('stats.reliabilityDesc')}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
