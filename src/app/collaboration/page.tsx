'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAnimations } from '../../hooks/useAnimations';

export default function Collaboration() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section avec design collaboratif */}
        <section className="collaboration-hero">
          <div className="container">
            <div className="collaboration-hero-content">
              <h1>Un commun humanitaire</h1>
              <p className="hero-subtitle">
                Mettre l&apos;hygiène en commun pour créer des liens sociaux et renforcer la solidarité locale.
              </p>
       
            </div>
          </div>
        </section>

        {/* Section principale avec design en réseau */}
        <section className="collaboration-network">
          <div className="container">
            <div className="network-layout">
              <div className="network-center">
              <h2>Des modules pour rassembler :</h2>
              </div>
              <div className="network-nodes">
                <div className="network-node node--associations">
                  <div className="node-icon">🏥</div>
                  <h3>Associations</h3>
                  <p>Mis à disposition aux ONG locales pour maximiser l'impact</p>
                </div>
                <div className="network-node node--collectivites">
                  <div className="node-icon">🏛️</div>
                  <h3>Collectivités</h3>
                  <p>Collaboration avec les villes et territoires</p>
                </div>
                <div className="network-node node--communautes">
                  <div className="node-icon">👥</div>
                  <h3>Communautés</h3>
                  <p>Intégration dans le tissu social local</p>
                </div>
                <div className="network-node node--beneficiaires">
                  <div className="node-icon">💙</div>
                  <h3>Bénéficiaires</h3>
                  <p>Au cœur de notre modèle collaboratif</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section des communs humanitaires */}
        <section className="collaboration-communs">
          <div className="container">
            <h2>Les communs humanitaires</h2>
            <p>
                Les modules BubbleBox sont pensés en tant que "communs humanitaires" développés, déployés et opérés avec les associations, les collectivités territoriales et les communautés locales pour renforcer le tissu de solidarité existant, s'adapter à chaque contexte et maximiser l'impact de chaque module.
                </p>
            <div className="communs-grid">
              <div className="communs-item">
                <div className="communs-icon">🌱</div>
                <h4>Développement partagé</h4>
                <p>Conception impliquant toutes les parties prenantes</p>
              </div>
              <div className="communs-item">
                <div className="communs-icon">🚀</div>
                <h4>Déploiement collectif</h4>
                <p>Fédération des acteurs locaux autour du dispositif</p>
              </div>
              <div className="communs-item">
                <div className="communs-icon">⚙️</div>
                <h4>Opération commune</h4>
                <p>Gestion partagée et maintenance collaborative</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section impact social avec design en spirale */}
        {/* <section className="collaboration-impact">
          <div className="container">
            <h2>Notre impact social</h2>
            <div className="impact-spiral">
              <div className="spiral-item spiral-item--1">
                <h3>Bien-être et santé</h3>
                <p>
                  Nous sommes convaincus que l&apos;accès décent à l&apos;hygiène que nous offrons est un socle 
                  pour entretenir le bien-être et la santé de toutes et tous.
                </p>
              </div>
              <div className="spiral-item spiral-item--2">
                <h3>Dignité et confiance</h3>
                <p>
                  Nous donnons à nos bénéficiaires les ressources pour prendre soin d&apos;elles et d&apos;eux-même. 
                  En respectant leur dignité et en nourrissant leur confiance.
                </p>
              </div>
              <div className="spiral-item spiral-item--3">
                <h3>Liens sociaux</h3>
                <p>
                  BubbleBox contribue à la création et à la culture de liens sociaux avec les communautés 
                  locales pour les personnes marginalisées.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Section cercle vertueux */}
        <section className="collaboration-cercle">
          <div className="container">
            <h2>Le cercle vertueux</h2>
            <div className="cercle-container">
              <div className="cercle-elements">
                <div className="cercle-element">
                  <div className="element-icon">🚿</div>
                  <h4>Accès à l&apos;hygiène</h4>
                  <p>Module BubbleBox opérationnel</p>
                </div>
                <div className="cercle-element">
                  <div className="element-icon">💙</div>
                  <h4>Bénéficiaires</h4>
                  <p>Personnes en situation de précarité</p>
                </div>
                <div className="cercle-element">
                  <div className="element-icon">🤝</div>
                  <h4>Bénévoles</h4>
                  <p>Certains bénéficiaires deviennent bénévoles</p>
                </div>
                <div className="cercle-element">
                  <div className="element-icon">🌍</div>
                  <h4>Communauté</h4>
                  <p>Renforcement du tissu social</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section avec design unique */}
        <section className="collaboration-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Rejoignez notre réseau collaboratif</h2>
              <p>Ensemble, créons des communs humanitaires pour un avenir plus solidaire</p>
              <div className="cta-actions">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Contact" className="btn btn--primary" target="_blank" rel="noopener noreferrer">NOUS CONTACTER</Link>
                <Link href="/team" className="btn btn--ghost">REJOINDRE L&apos;ÉQUIPE</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
