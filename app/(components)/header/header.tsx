'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MobileHeader = dynamic(() => import('./mobile/mobileHeader'), { ssr: false });
const DesktopHeader = dynamic(() => import('./desktop/desktopHeader'), { ssr: false });

export default function Header() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // init
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile === null) return null;

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}