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
              <h1>Collaboration</h1>
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
              </div>
              <div className="network-nodes">
                <div className="network-node node--associations">
                  <div className="node-icon">🏥</div>
                  <h3>Associations</h3>
                  <p>Partenaire avec des ONG locales pour maximiser l&apos;impact</p>
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
            <div className="communs-grid">
              <div className="communs-item communs-item--main">
                <h3>Qu&apos;est-ce qu&apos;un commun humanitaire ?</h3>
                <p>
                  Les modules BubbleBox sont des &quot;communs humanitaires&quot; développés, déployés et opérés 
                  avec les associations, les collectivités et les communautés locales pour renforcer 
                  le tissu de solidarité existant, s&apos;adapter à chaque contexte et maximiser notre impact.
                </p>
              </div>
              <div className="communs-item">
                <div className="communs-icon">🌱</div>
                <h4>Développement partagé</h4>
                <p>Conception collaborative avec tous les acteurs</p>
              </div>
              <div className="communs-item">
                <div className="communs-icon">🚀</div>
                <h4>Déploiement collectif</h4>
                <p>Mise en place avec les communautés locales</p>
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
        <section className="collaboration-impact">
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
        </section>

        {/* Section collaboration territoriale */}
        <section className="collaboration-territoriale">
          <div className="container">
            <div className="territoriale-layout">
              <div className="territoriale-content">
                <h2>Collaboration territoriale</h2>
                <p>
                  En collaborant avec des associations et collectivités territoriales, nous soutenons 
                  des relations saines et positives entre nos bénéficiaires et les communautés locales.
                </p>
                <div className="territoriale-benefits">
                  <div className="benefit">
                    <span className="benefit-icon">🤝</span>
                    <span>Rapprochement des acteurs</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">💡</span>
                    <span>Nouvelles collaborations</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">🏥</span>
                    <span>Amélioration de la santé publique</span>
                  </div>
                </div>
              </div>
              <div className="territoriale-visual">
                <div className="collaboration-flow">
                  <div className="flow-step">
                    <span className="step-number">1</span>
                    <span>Rencontre</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <span className="step-number">2</span>
                    <span>Collaboration</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <span className="step-number">3</span>
                    <span>Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <Link href="/#contact" className="btn btn--primary">NOUS CONTACTER</Link>
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
