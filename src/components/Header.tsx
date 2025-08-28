'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <Link className="btn-link" href="#don">FAIRE UN DON</Link>
      </div>
      <nav className="nav">
        <Link className="brand" href="/">
          <Logo size={40} />
          <span>BUBBLEBOX</span>
        </Link>
        <button 
          id="navToggle" 
          aria-label="Ouvrir le menu" 
          aria-expanded={isMenuOpen} 
          className="nav-toggle"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navMenu">
          <button 
            className="menu-close"
            onClick={toggleMenu}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/team">Notre équipe</Link></li>
          <li><Link href="/solution">La solution</Link></li>
          <li><Link href="/design-utilisateur">Design centré</Link></li>
          <li><Link href="/durabilite">Durabilité</Link></li>
          <li><Link href="/collaboration">Collaboration</Link></li>
          <li><Link href="/notre-impact">Notre impact</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><Link className="btn btn--don" href="/#don">FAIRE UN DON</Link></li>
        </ul>
      </nav>
    </header>
  );
}
