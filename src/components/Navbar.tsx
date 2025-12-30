'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Navbar() {
    const nav = useTranslations('Navigation');
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    // Dark text if not home or if scrolled
    const isHome = pathname === '/';
    const isDarkText = !isHome || scrolled;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 50,
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.4s ease-in-out',
                padding: scrolled ? '0.5rem 0' : '1rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{
                    position: 'relative',
                    height: '60px',
                    width: '220px',
                    filter: isHome && !scrolled ? 'brightness(0) invert(1)' : 'none', // White logo on dark hero
                    transition: 'filter 0.3s ease'
                }}>
                    <Image
                        src="/logo-refined.png"
                        alt="DjenDjen Logistics"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                        priority
                    />
                </Link>

                <nav style={{
                    display: 'flex',
                    gap: '2.5rem',
                    fontSize: '0.95rem',
                    letterSpacing: '0.02em',
                    fontWeight: 500
                }}>
                    {[
                        { key: 'home', href: '/' },
                        { key: 'about', href: '/about' },
                        { key: 'services', href: '/services' },
                        { key: 'coverage', href: '/coverage' },
                        { key: 'contact', href: '/contact' }
                    ].map((item) => {
                        const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                        const isTransparent = isHome && !scrolled;

                        return (
                            <div key={item.key} style={{ position: 'relative' }}>
                                <Link
                                    href={item.href}
                                    style={{
                                        color: isTransparent
                                            ? (isActive ? '#F59E0B' : 'rgba(255,255,255,0.9)')  // White/Amber on Hero
                                            : (isActive ? 'var(--primary-dark)' : 'var(--text-muted)'), // Standard dark on scroll
                                        fontWeight: isActive ? 700 : 500,
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    {nav(item.key)}
                                </Link>
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-4px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            backgroundColor: isTransparent ? '#F59E0B' : 'var(--primary)',
                                            borderRadius: '2px'
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {/* Language Switcher */}
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {['fr', 'ar'].map((lang) => (
                            <Link
                                key={lang}
                                href={pathname}
                                locale={lang}
                                scroll={false}
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    color: (isHome && !scrolled)
                                        ? (currentLocale === lang ? '#F59E0B' : 'rgba(255,255,255,0.8)')
                                        : (currentLocale === lang ? 'var(--primary)' : 'var(--text-muted)'),
                                    opacity: currentLocale === lang ? 1 : 0.6
                                }}
                            >
                                {lang}
                            </Link>
                        ))}
                    </div>

                    <Link href="/contact" className="btn" style={{
                        backgroundColor: (isHome && !scrolled) ? 'white' : 'var(--primary)',
                        color: (isHome && !scrolled) ? 'var(--primary)' : 'white',
                        padding: '0.75rem 1.75rem',
                        fontSize: '0.95rem',
                        borderRadius: '50px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                        {nav('contact')} →
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
