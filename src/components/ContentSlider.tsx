'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Truck, Package, MapPin, Recycle } from 'lucide-react';

export function ContentSlider() {
    const t = useTranslations('Services');

    // Data mapping
    const services = [
        { key: 'transport', icon: Truck },
        { key: 'handling', icon: Package },
        { key: 'pickup', icon: MapPin },
        { key: 'recovery', icon: Recycle }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 2;
    const maxIndex = services.length - itemsPerPage;

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    return (
        <section className="section" style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

                {/* Header with Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                    <div>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            color: 'var(--primary)',
                            marginBottom: '0.5rem'
                        }}>
                            {t('title')}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            style={{
                                width: '40px', height: '40px',
                                borderRadius: '50%',
                                border: '1px solid var(--border)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: currentIndex === 0 ? '#f3f4f6' : 'white',
                                color: currentIndex === 0 ? '#d1d5db' : 'var(--primary)',
                                cursor: currentIndex === 0 ? 'default' : 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            style={{
                                width: '40px', height: '40px',
                                borderRadius: '50%',
                                border: '1px solid var(--border)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: currentIndex === maxIndex ? '#f3f4f6' : 'white',
                                color: currentIndex === maxIndex ? '#d1d5db' : 'var(--primary)',
                                cursor: currentIndex === maxIndex ? 'default' : 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Slider Track */}
                <div style={{ overflow: 'hidden' }}>
                    <motion.div
                        animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }} // Move by percentage
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{
                            display: 'flex',
                            gap: '2rem', // Matches gap in calculation? No, gap logic in % is tricky.
                            // Easier approach: Use flex basis 50% minus gap adjustment
                        }}
                    >
                        {/* We need a specific layout logic for the gap to work perfectly with % movement.
                            Let's use a wrapper that is wider.  */}
                    </motion.div>

                    {/* Simpler Grid/Flex Approach for 2 items controlled by index slice? 
                        No, "Slider" implies movement. 
                        Let's try a transform approach with fixed widths if possible, or % based.
                     */}

                    {/* Re-implementing correctly for smooth "2 at a time" slide */}
                    <motion.div
                        initial={false}
                        animate={{ x: `${-currentIndex * 50}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{ display: 'flex', width: `${services.length * 50}%` }} // Total width relative to container
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.key} style={{
                                    width: '50%', // Each item takes 50% of the VIEWPORT (container)
                                    padding: '0 1rem', // Gaps via padding
                                    boxSizing: 'border-box'
                                }}>
                                    <div style={{
                                        backgroundColor: 'white',
                                        padding: '2rem',
                                        borderRadius: '1rem',
                                        height: '100%',
                                        border: '1px solid #e5e7eb',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        textAlign: 'left'
                                    }}>
                                        <div style={{
                                            background: 'rgba(0, 51, 160, 0.1)',
                                            padding: '1rem',
                                            borderRadius: '0.75rem',
                                            marginBottom: '1.5rem',
                                            color: 'var(--primary)'
                                        }}>
                                            <Icon size={28} />
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            marginBottom: '0.75rem',
                                            color: 'var(--text-main)'
                                        }}>
                                            {t(`${service.key}.title`)}
                                        </h3>
                                        <p style={{
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.6,
                                            flexGrow: 1
                                        }}>
                                            {t(`${service.key}.desc`)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
