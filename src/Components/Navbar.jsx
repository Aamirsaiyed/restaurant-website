import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../Data/Data'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header
            className={`fixed top-0 w-full px-auto z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/60 backdrop-blur-lg  shadow-sm'
                : 'bg-transparent'
                }`}
        >

            <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">

                {/* Logo */}
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <img src="/assets/logo.svg" alt="Logo" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-zinc-600 transition"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#booking-process"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition"
                    >
                        Book a table
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <nav className="px-6 py-5">
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-gray-700 hover:text-orange-500 transition"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#booking-process"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-center mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition"
                    >
                        Book a table
                    </a>
                </nav>
            </div>

        </header>
    )
}

export default Navbar
