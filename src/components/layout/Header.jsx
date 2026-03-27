import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Profil',       href: '#profil' },
  { label: 'Formation',    href: '#formation' },
  { label: 'Projets',      href: '#projets' },
  { label: 'Hard skills',  href: '#hardskills' },
  { label: 'Soft skills',  href: '#softskills' },
  { label: 'Expériences',  href: '#experiences' },
  { label: 'Association',  href: '#association' },
  { label: 'CV',           href: '#cv' },
  { label: 'Contact',      href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="w-full fixed top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(7,8,15,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #e7e5e4' : '1px solid rgba(94,207,190,0.15)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        <a
          href="#"
          className="font-serif text-lg transition-colors duration-300"
          style={{ color: scrolled ? '#0f172a' : '#f0ece4' }}
        >
          A. Crapanzano
        </a>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex gap-0.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm px-3 py-1.5 rounded transition-all duration-200"
                  style={{ color: scrolled ? '#64748b' : 'rgba(240,236,228,0.65)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#5ecfbe';
                    e.currentTarget.style.backgroundColor = scrolled ? '#f1faf8' : 'rgba(94,207,190,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = scrolled ? '#64748b' : 'rgba(240,236,228,0.65)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded transition-colors"
          style={{ color: scrolled ? '#0f172a' : '#f0ece4' }}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="lg:hidden px-6 pb-4"
          style={{ backgroundColor: scrolled ? 'white' : '#0d1018', borderTop: '1px solid rgba(94,207,190,0.15)' }}
        >
          <ul className="flex flex-col gap-0.5 pt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm py-2.5 px-2 rounded transition-colors"
                  style={{ color: scrolled ? '#475569' : 'rgba(240,236,228,0.75)' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
