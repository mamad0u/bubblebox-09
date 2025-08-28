import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand--footer" href="/">
            <Logo size={40} />
            <span>BUBBLEBOX</span>
          </Link>
          <p>Des douches mobiles, un accueil digne, partout.</p>
        </div>
        <nav className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/team">Notre équipe</Link></li>
            <li><Link href="/solution">La solution</Link></li>
            <li><Link href="/design-utilisateur">Design centré</Link></li>
            <li><Link href="/durabilite">Durabilité</Link></li>
            <li><Link href="/collaboration">Collaboration</Link></li>
            <li><Link href="/notre-impact">Notre impact</Link></li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <h4>Ressources</h4>
          <ul>
            <li><Link href="/#partenaires">Partenaires</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
            <li><Link href="/#don">Faire un don</Link></li>
          </ul>
        </nav>
        <div>
          <h4>Nous écrire</h4>
          <p>info@bubbleboxproject.org</p>
          <div className="socials">
            <a aria-label="Twitter" href="#" className="social-icon">
              <span>𝕏</span>
            </a>
            <a aria-label="LinkedIn" href="#" className="social-icon">
              <span>in</span>
            </a>
            <a aria-label="Instagram" href="#" className="social-icon">
              <span>📷</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© BubbleBox 2025 — Tous droits réservés</p>
      </div>
    </footer>
  );
}
