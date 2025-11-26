'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (e: React.MouseEvent) => {
    // Sur mobile uniquement, empêcher la navigation et ouvrir le sous-menu
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Nettoyer la classe quand le composant est démonté
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="top-banner">
        <p>URGENCE HYGIÈNE DANS LA RUE : AGISSEZ AVEC NOUS</p>
        <Link className="btn-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Don" target="_blank" rel="noopener noreferrer">FAIRE UN DON</Link>
      </div>
      <nav className="nav">
        <Link className="brand" href="/">
          <Image 
            src="/BBX.png" 
            alt="BubbleBox Logo" 
            width={160} 
            height={50}
            className="logo-image responsive-logo"
          />
        </Link>
        <button 
          id="navToggle" 
          aria-label="Ouvrir le menu" 
          aria-expanded={isMenuOpen} 
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span><span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navMenu">
          <li><Link href="/about" onClick={toggleMenu}>À propos</Link></li>
          <li><Link href="/team" onClick={toggleMenu}>Notre équipe</Link></li>
          <li className="nav-item-dropdown">
            <Link href="/solution" onClick={toggleSubmenu} className="nav-link-dropdown">
              La solution <span className="dropdown-arrow">▼</span>
            </Link>
            <ul className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
              <li><Link href="/design-utilisateur" onClick={toggleMenu}>Design centré</Link></li>
              <li><Link href="/durabilite" onClick={toggleMenu}>Durabilité</Link></li>
              <li><Link href="/collaboration" onClick={toggleMenu}>Collaboration</Link></li>
            </ul>
          </li>
          <li className="nav-item-mobile-only">
            <Link href="/design-utilisateur" onClick={toggleMenu}>Design centré</Link>
          </li>
          <li className="nav-item-mobile-only">
            <Link href="/durabilite" onClick={toggleMenu}>Durabilité</Link>
          </li>
          <li className="nav-item-mobile-only">
            <Link href="/collaboration" onClick={toggleMenu}>Collaboration</Link>
          </li>
          <li><Link href="/notre-impact" onClick={toggleMenu}>Notre impact</Link></li>
          <li className="nav-item-desktop-only"><Link className="btn btn--don" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Don" target="_blank" rel="noopener noreferrer">FAIRE UN DON</Link></li>
        </ul>
      </nav>
    </header>
  );
}
