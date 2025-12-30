'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const Marquee = ({ children, direction = 'left', speed = 25 }: { children: ReactNode, direction?: 'left' | 'right', speed?: number }) => {
    return (
        <div style={{ overflow: 'hidden', display: 'flex', width: '100%', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: direction === 'left' ? '-50%' : '50%' }}
                transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'flex', gap: '4rem', padding: '1rem 0', flexShrink: 0, minWidth: '100%' }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};
