'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav id="header" className={scrolled ? 'scrolled' : ''}>
            <Link href="/" className="logo">
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={150}
                    height={50}
                    className="logo"
                    priority
                />
            </Link>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                <li><Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                <li><Link href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
                <li><Link href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link></li>
                <li><Link href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</Link></li>
                <li><Link href="#contact" className="btn-contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
}
