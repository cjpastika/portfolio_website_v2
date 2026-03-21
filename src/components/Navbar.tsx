import { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',      index: 1 },
  { label: 'Experience', index: 2 },
  { label: 'Projects',   index: 3 },
  { label: 'Skills',     index: 4 },
  { label: 'Education',  index: 5 },
  { label: 'Contact',    index: 6 },
];

interface Props {
  currentSection: number;
  navigateTo: (i: number) => void;
}

export default function Navbar({ currentSection, navigateTo }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (index: number) => {
    setMenuOpen(false);
    navigateTo(index);
  };

  return (
    <nav className="navbar navbar-scrolled">
      <div className="navbar-inner">
        <a
          className="navbar-logo"
          href="#"
          onClick={(e) => { e.preventDefault(); handleClick(0); }}
        >
          COLLIN PASTIKA
        </a>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.index}
              href="#"
              className={`navbar-link ${currentSection === link.index ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleClick(link.index); }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar-mobile-overlay">
          {NAV_LINKS.map((link) => (
            <a
              key={link.index}
              href="#"
              className="navbar-mobile-link"
              onClick={(e) => { e.preventDefault(); handleClick(link.index); }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
