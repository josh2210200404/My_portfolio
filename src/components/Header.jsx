import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/resume' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const sectionIds = navLinks
            .filter((link) => link.href.startsWith('#'))
            .map((link) => link.href.slice(1));

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // At the very bottom, the last section may be too short to reach the trigger line.
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (atBottom) {
                setActiveSection(sectionIds[sectionIds.length - 1]);
                return;
            }

            // Active section = the last one whose top has passed ~1/3 of the viewport.
            const triggerLine = window.innerHeight / 3;
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= triggerLine) current = id;
            }
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const isActive = (href) => href === `#${activeSection}`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Josh Swaroop Vegi
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                className={`relative px-3 py-2 rounded-full text-sm font-medium transition-colors ${isActive(link.href)
                                    ? 'text-cyan-400 bg-cyan-500/10'
                                    : 'text-slate-300 hover:text-cyan-400'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 ml-3 border-l border-slate-700 pl-4">
                            <a href="https://github.com/josh2210200404" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/josh-swaroop-3787252b2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                className={`block px-3 py-2 text-base font-medium rounded-md border-l-2 ${isActive(link.href)
                                    ? 'text-cyan-400 bg-slate-800 border-cyan-400'
                                    : 'text-slate-300 border-transparent hover:text-white hover:bg-slate-800'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
