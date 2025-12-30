'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Marquee } from '@/components/ui/Marquee';
import { HeroSlider } from '@/components/ui/HeroSlider';
import { useRef } from 'react';
import { Map, Box, Truck, CheckCircle } from 'lucide-react';

// Animation Variants
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

export default function Home() {
  const t = useTranslations('HomePage');
  const targetRef = useRef(null);

  // Parallax effect for hero
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero Section - Slider & Modern Premium Layout */}
      <section ref={targetRef} style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '0', // Full screen impact
        overflow: 'hidden',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        backgroundColor: '#0f172a', // Fallback dark
        zIndex: 5,
        color: 'white'
      }}>
        <HeroSlider />

        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
          <div style={{ maxWidth: '900px', marginTop: '4rem' }}>


            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
                textShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              {t('heroTitle').split(' ').map((word, i) => (
                <span key={i} style={['freight', 'experts', 'métier', 'craft'].some(k => word.toLowerCase().includes(k)) ? { color: 'var(--accent)', display: 'inline-block' } : { display: 'inline-block' }}>
                  {word}&nbsp;
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '3.5rem',
                lineHeight: 1.8,
                maxWidth: '650px',
                fontWeight: 300,
                borderLeft: '4px solid var(--accent)',
                paddingLeft: '1.5rem'
              }}
            >
              {t('heroDescription')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              <Link href="/contact" className="btn" style={{
                padding: '1.25rem 3.5rem',
                fontSize: '1.05rem',
                borderRadius: '50px',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                border: 'none',
                boxShadow: '0 20px 40px -10px rgba(245, 158, 11, 0.3)',
                fontWeight: 700
              }}>
                {t('cta')}
              </Link>
              <Link href="/services" className="btn" style={{
                padding: '1.25rem 3.5rem',
                fontSize: '1.05rem',
                borderRadius: '50px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontWeight: 600,
                display: 'flex',
                gap: '0.75rem'
              }}>
                {t('services')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Diagonal Cut */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: '#F8FAFC',
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
          zIndex: 10
        }} />
      </section>

      {/* Trusted Partners */}
      <section style={{ padding: '4rem 0', backgroundColor: '#fff', position: 'relative', zIndex: 4 }}>
        <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8' }}>
            {t('trustedBy')}
          </p>
        </div>
        <Marquee speed={30}>
          {['Sonatrach', 'Cevital', 'Condor', 'Naftal', 'Iris', 'Brandt', 'Toyota', 'Sim', 'Amor Benamor'].map((brand, i) => (
            <div key={i} style={{ padding: '1rem 3rem', opacity: 0.6, transition: 'opacity 0.3s' }}>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--primary-dark)',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em'
              }}>{brand}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Strategic Workflows - Redesigned (Technical/Industrial Look) */}
      <section className="section" style={{ position: 'relative', padding: '10rem 0', background: '#F8FAFC', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-dark)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              {t('steps.title')}
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.2rem' }}>{t('steps.subtitle')}</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              position: 'relative'
            }}
          >
            {/* Connecting Line (Desktop Only) */}
            <div className="desktop-line" style={{
              position: 'absolute', top: '2.5rem', left: '10%', right: '10%', height: '2px',
              background: 'repeating-linear-gradient(to right, #cbd5e1 0, #cbd5e1 10px, transparent 10px, transparent 20px)',
              zIndex: 0, display: 'none'
            }} />
            <style jsx>{`
              @media (min-width: 1024px) {
                 .desktop-line { display: block !important; }
              }
            `}</style>

            {[
              { title: t('steps.step1.title'), desc: t('steps.step1.desc'), icon: Map },
              { title: t('steps.step2.title'), desc: t('steps.step2.desc'), icon: Box },
              { title: t('steps.step3.title'), desc: t('steps.step3.desc'), icon: Truck },
              { title: t('steps.step4.title'), desc: t('steps.step4.desc'), icon: CheckCircle }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)',
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Icon Circle */}
                <div style={{
                  width: '80px', height: '80px',
                  borderRadius: '16px',
                  background: 'var(--surface)',
                  color: 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
                  border: '1px solid #f1f5f9'
                }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                <div style={{
                  position: 'absolute', top: '1.5rem', right: '1.5rem',
                  fontSize: '3rem', fontWeight: 900, color: '#f1f5f9', zIndex: -1, lineHeight: 1
                }}>
                  0{idx + 1}
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>{item.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="section" style={{ padding: '6rem 0 10rem', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-dark)' }}>{t('bento.title')}</h2>
            <div style={{ width: '80px', height: '6px', background: 'var(--accent)', borderRadius: '10px', marginTop: '1rem', marginInline: 'auto' }} />
          </div>

          <div className="bento-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', minHeight: '550px'
          }}>
            <style jsx>{`
                    @media (min-width: 1024px) {
                        .bento-grid {
                            grid-template-columns: repeat(4, 1fr) !important;
                            grid-template-rows: repeat(2, 280px);
                        }
                        .bento-item-1 { grid-column: span 2; grid-row: span 2; }
                        .bento-item-2 { grid-column: span 1; grid-row: span 2; }
                        .bento-item-3 { grid-column: span 1; grid-row: span 1; }
                        .bento-item-4 { grid-column: span 1; grid-row: span 1; }
                    }
                 `}</style>

            {/* 1. Interactive Coverage Map */}
            <motion.div
              className="bento-item-1"
              whileHover={{ scale: 1.01 }}
              style={{
                background: '#0f172a',
                borderRadius: '30px',
                padding: '3rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3
              }} />
              <div style={{ position: 'absolute', top: '20%', right: '20%', width: '50%', height: '50%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)', filter: 'blur(40px)', opacity: 0.4 }} />

              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {t('bento.coverage.label')}
                </div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                  {t('bento.coverage.title').split(' ')[0]} {t('bento.coverage.title').split(' ')[1]}<br />
                  <span style={{ color: 'var(--accent)' }}>{t('bento.coverage.title').split(' ').slice(2).join(' ')}</span>
                </h3>
                <p style={{ color: '#cbd5e1', maxWidth: '80%' }}>{t('bento.coverage.desc')}</p>
              </div>
            </motion.div>

            {/* 2. Success Rate */}
            <motion.div
              className="bento-item-2"
              whileHover={{ y: -5 }}
              style={{
                background: '#F8FAFC',
                borderRadius: '30px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '1px solid #e2e8f0'
              }}
            >
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '8px solid #e2e8f0', borderTopColor: 'var(--success)', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>98%</span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{t('bento.stats.onTime')}</h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem' }}>{t('bento.stats.desc')}</p>
            </motion.div>

            {/* 3. Technology */}
            <motion.div
              className="bento-item-3"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #f59e0b)',
                borderRadius: '30px',
                padding: '2rem',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{t('bento.tracking.title')}</h4>
              <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>{t('bento.tracking.desc')}</p>
            </motion.div>

            {/* 4. Support */}
            <motion.div
              className="bento-item-4"
              style={{
                background: '#fff',
                borderRadius: '30px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', right: -10, bottom: -10, fontSize: '5rem', opacity: 0.05 }}>🎧</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)' }}>{t('bento.support.title')}</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{t('bento.support.desc')}</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: 'var(--primary-dark)', padding: '8rem 0', position: 'relative', overflow: 'hidden', color: 'white' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>{t('testimonials.title')}</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '5rem', maxWidth: '600px', margin: '0 auto 5rem' }}>
            {t('testimonials.subtitle')}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  padding: '3rem',
                  borderRadius: '24px',
                  textAlign: 'left',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '3rem', color: 'var(--accent)', opacity: 0.2, fontFamily: 'serif' }}>"</div>

                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                  {['★', '★', '★', '★', '★'].map(s => <span key={Math.random()}>{s}</span>)}
                </div>

                <p style={{ fontStyle: 'italic', color: '#cbd5e1', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                  &quot;{t('testimonials.quote')}&quot;
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #cbd5e1, #94a3b8)', borderRadius: '50%' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t('testimonials.author')}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{t('testimonials.role')}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
