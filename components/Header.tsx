"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
        : "py-4 bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/logo.png"
                  alt="Wisdom Divine Logo"
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Wisdom Divine
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Full-Stack Developer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-1.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 top-2.5" : ""
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}></span>
              <span className={`absolute top-3.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 top-2.5" : ""
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    pathname === link.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}