'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export function Footer() {
    const t = useTranslations('HomePage');
    const nav = useTranslations('Navigation');
    const contact = useTranslations('Contact');
    const tFooter = useTranslations('Footer');

    return (
        <footer style={{ backgroundColor: '#0f172a', color: 'white', paddingTop: '6rem', paddingBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                opacity: 0.3
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ width: '180px', height: '65px', position: 'relative', filter: 'brightness(0) invert(1)' }}>
                            <Image
                                src="/logo-refined.png"
                                alt="DjenDjen Logo"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left' }}
                            />
                        </div>
                        <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1rem', maxWidth: '300px' }}>
                            {t('heroDescription')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '2rem', color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            Company
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['home', 'about', 'services', 'coverage', 'contact'].map((key) => (
                                <Link
                                    key={key}
                                    href={key === 'home' ? '/' : `/${key}`}
                                    style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                                    className="hover:text-amber-500"
                                >
                                    {nav(key)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '2rem', color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            Services
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cbd5e1' }}>
                            <p>{tFooter('services.roadFreight')}</p>
                            <p>{tFooter('services.warehousing')}</p>
                            <p>{tFooter('services.projectCargo')}</p>
                            <p>{tFooter('services.supplyChain')}</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '2rem', color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            {contact('title')}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#cbd5e1' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--accent)' }}>📍</span>
                                <span>{contact('info.address')}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ color: 'var(--accent)' }}>📞</span>
                                <span>{contact('info.phone')}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ color: 'var(--accent)' }}>✉️</span>
                                <span>{contact('info.email')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                        {tFooter('copyright', { year: new Date().getFullYear() })}
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', opacity: 0.7 }}>
                        {/* Simple Social Icons as Text for now, can be replaced by real icons */}
                        <span style={{ cursor: 'pointer', color: 'white', fontWeight: 600 }}>Facebook</span>
                        <span style={{ cursor: 'pointer', color: 'white', fontWeight: 600 }}>LinkedIn</span>
                        <span style={{ cursor: 'pointer', color: 'white', fontWeight: 600 }}>Twitter</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
