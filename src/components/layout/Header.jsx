import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Profil', href: '#profil' },
  { label: 'Formation', href: '#formation' },
  { label: 'Projets', href: '#projets' },
  { label: 'Hardskills', href: '#hardskills' },
  { label: 'Softskills', href: '#softskills' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Association', href: '#association' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between lg:justify-center py-4 lg:pt-5 lg:pb-2">
          <h1 className="font-serif text-xl lg:text-3xl text-blue-900">
            Alexandre Crapanzano
          </h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -mr-1 text-blue-900"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`${isMenuOpen ? 'block' : 'hidden'} lg:block pb-3`}
        >
          <ul className="flex lg:flex-row flex-col lg:justify-center lg:flex-wrap lg:gap-1 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block uppercase text-sm font-medium text-gray-700 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
