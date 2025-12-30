'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
    const nav = useTranslations('Navigation');
    const pathname = usePathname();
    const currentLocale = useLocale();

    // Persist language selection
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user-locale', currentLocale);
        }
    }, [currentLocale]);

    return (
        <header style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            direction: 'ltr' // FORCE LTR LAYOUT CONSISTENCY
        }}>
            <div className="container" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 60,
                    backgroundColor: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px'
                }}>
                    <div style={{ position: 'relative', height: '50px', width: '160px' }}>
                        <Image
                            src="/images/logo-new.png"
                            alt="DjenDjen Logistics"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                            priority
                        />
                    </div>
                </Link>

                <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {[
                        { key: 'home', href: '/' },
                        { key: 'about', href: '/about' },
                        { key: 'services', href: '/services' },
                        { key: 'coverage', href: '/coverage' },
                        { key: 'contact', href: '/contact' }
                    ].map((item) => {
                        const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                        return (
                            <div key={item.key} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Link
                                    href={item.href}
                                    className="nav-link"
                                    style={{
                                        color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                                        fontWeight: isActive ? 700 : 500, // Bold active, Medium inactive
                                        transition: 'color 0.3s ease',
                                        paddingBottom: '4px'
                                    }}
                                >
                                    {nav(item.key)}
                                </Link>
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-2px',
                                            left: 0,
                                            right: 0,
                                            height: '1.5px',
                                            backgroundColor: 'var(--primary)',
                                            borderRadius: '2px'
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>

                    <Link href="/contact" className="btn btn-primary" style={{ height: '2.5rem', fontSize: '0.85rem', padding: '0 1.5rem' }}>
                        {nav('contact')}
                    </Link>

                    {/* Language Switcher - Compact & Below Button */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0 0.25rem'
                    }}>
                        {['en', 'fr', 'ar'].map((lang) => {
                            const isActive = currentLocale === lang;
                            return (
                                <Link
                                    key={lang}
                                    href={pathname} // Keep current route
                                    locale={lang}
                                    scroll={false} // Prevent scroll reset
                                    className="lang-link"
                                    style={{
                                        padding: '0.15rem 0.4rem',
                                        borderRadius: '4px',
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        color: isActive ? 'white' : 'var(--text-muted)',
                                        backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                                        transition: 'all 0.2s ease',
                                        lineHeight: 1,
                                        letterSpacing: '0.05em',
                                        border: '1px solid transparent'
                                    }}
                                >
                                    {lang}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
}
