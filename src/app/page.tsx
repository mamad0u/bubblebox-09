'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useAnimations } from '../hooks/useAnimations';

export default function Home() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        <section className="hero">
          <div className="hero-bg" role="img" aria-label="Module de douches mobile">
            <div className="image-placeholder">
              <span>Image en attente</span>
              <p>Module de douches mobile</p>
            </div>
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <div className="hero-slogan">
              <h1>SE LAVER</h1>
              <h1>EST UN DROIT</h1>
              <h1>UNIVERSEL</h1>
            </div>
            <p className="hero-desc">Nous construisons des solutions pour améliorer l'accès à l'hygiène pour tous.</p>
            <div className="hero-ctas">
              <Link href="#solution" className="btn btn--primary">DÉCOUVRIR LA SOLUTION</Link>
              <Link href="#don" className="btn btn--ghost">FAIRE UN DON</Link>
            </div>
          </div>
        </section>

        <section className="grid-blocks">
          <div className="block block--primary">
            <div className="block-content">
              <h2>COMMENT</h2>
              <h2>SOUTENIR</h2>
              <h2>BUBBLEBOX</h2>
              <p>Soutenez nos actions sur le terrain en faisant un don. Chaque geste compte.</p>
              <Link href="#don" className="btn btn--white">EN SAVOIR PLUS</Link>
            </div>
    
          </div>
          
          <div className="block block--secondary">
            <div className="block-content">
              <h2>DEVENIR</h2>
              <h2>PARTENAIRE</h2>
              <p>Entreprises, découvrez comment nous soutenir et agir ensemble.</p>
              <Link href="#partenaires" className="btn btn--white">NOUS CONTACTER</Link>
            </div>
          </div>
          
          <div className="block block--image">
            <div className="image-placeholder">
              <span>Image en attente</span>
              <p>Accueil des bénéficiaires</p>
            </div>
          </div>
        </section>

        <section id="mission" className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>NOUS SOMMES</h2>
              <h2>ICI ET LÀ-BAS</h2>
              <p>Nous construisons des modules de douches mobiles et autonomes afin de donner un accès gratuit et décent à l'hygiène pour les personnes sans-abris, mal-logées, migrantes ou réfugiées.</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span className="feature-text">Autonome jusqu'à 50h d'opération</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌍</span>
                <span className="feature-text">Déployable partout</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💧</span>
                <span className="feature-text">Filtration et réutilisation de l'eau</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚿</span>
                <span className="feature-text">3 cabines individuelles</span>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="solution-grid">
          <div className="solution-block solution-block--large">
            <h2>COMMENT BUBBLEBOX</h2>
            <h2>AMÉLIORE LA VIE</h2>
            <h2>DE SES BÉNÉFICIAIRES ?</h2>
            <p>BubbleBox est un module d'hygiène construit dans un conteneur maritime recyclé. Chaque module accueille 3 cabines individuelles et peut fournir jusqu'à 100 douches par jour. Le module BubbleBox peut fonctionner sur remorque, en itinérance, ou déployé sur un site pour répondre à des besoins de moyen terme.</p>
            <div className="solution-features">
              <div className="feature">
                <span className="feature-icon">♻️</span>
                <h3>Conteneur maritime recyclé</h3>
                <p>Construction durable et responsable</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🚚</span>
                <h3>Fonctionnement flexible</h3>
                <p>Sur remorque, itinérant ou fixe</p>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <h3>Autonomie énergétique</h3>
                <p>Jusqu'à 50h d'opération continue</p>
              </div>
            </div>
            <Link href="#impact" className="btn btn--primary">EN SAVOIR PLUS</Link>
          </div>
          
          <div className="solution-block solution-block--image">
            <div className="image-placeholder">
              <span>Image en attente</span>
              <p>Module BubbleBox</p>
            </div>
          </div>
        </section>

        <section id="impact" className="impact-section">
          <div className="container">
            <h2>TÉMOIGNER POUR DÉNONCER,</h2>
            <h2>INFORMER POUR ENGAGER</h2>
            <div className="impact-content">
              <p className="impact-intro">Partout dans le monde, les personnes vivant dans des campements informels, squats ou camps de réfugiés n'ont pas un accès décent à l'hygiène.</p>
              
              <div className="impact-stats">
                <div className="impact-stat">
                  <h3>122+ millions</h3>
                  <p>d'êtres humains ont été forcés d'abandonner leur maison pour fuir des conflits, des violences et des violations des droits de l'homme en 2024. Ce nombre n'inclut pas les réfugiés climatiques (UNHCR).</p>
                </div>
                <div className="impact-stat">
                  <h3>350 000+</h3>
                  <p>personnes sont sans domicile en France. Elles constituent le groupe le plus vulnérable parmi les 4,2 millions de mal-logées (Fondation pour le Logement des Défavorisés).</p>
                </div>
              </div>
              
              <blockquote className="impact-quote">
                <p>"Le manque d'accès à l'hygiène menace la santé et le bien-être d'un nombre croissant de personnes, contribue à leur marginalisation et pose un risque pour la santé publique.</p>
                <p>BubbleBox propose une solution aux collectivités, ONG et communautés locales pour garantir ensemble un accès à l'hygiène décent et gratuit pour tous."</p>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="benefits" className="benefits-section">
          <div className="container">
            <h2>CE QU'APPORTE BUBBLEBOX</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3>Inclusion</h3>
                <p>Nous nous engageons à inclure nos bénéficiaires dans la conception et la gestion d'une solution qui protège leur santé et leur dignité.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🚨</div>
                <h3>Gestion de crise</h3>
                <p>Notre module d'hygiène est une solution modulaire et adaptative pour répondre de manière dynamique aux crises humanitaires actuelles.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌱</div>
                <h3>Évolutif et durable</h3>
                <p>BubbleBox conçoit des solutions qui peuvent être répliquées et adaptées localement, en conservant un impact social et environnemental positif.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="durabilite" className="durabilite-section">
          <div className="container">
            <div className="durabilite-content">
              <h2>DURABILITÉ</h2>
              <h2>INTÉGRÉE</h2>
              <p>Matériaux réemployés, filtration d'eau, solaire et stockage. Nous minimisons nos empreintes et maximisons l'impact social.</p>
              <div className="durabilite-features">
                <div className="durabilite-feature">
                  <span className="feature-number">♻️</span>
                  <h3>Réemploi & économie circulaire</h3>
                </div>
                <div className="durabilite-feature">
                  <span className="feature-number">💧</span>
                  <h3>Moindre consommation d'eau</h3>
                </div>
                <div className="durabilite-feature">
                  <span className="feature-number">☀️</span>
                  <h3>Énergie propre et efficace</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partenaires" className="partners-section">
          <div className="container">
            <h2>ILS NOUS SOUTIENNENT</h2>
            <div className="partners-grid">
              <div className="partner-logo">
                <div className="partner-placeholder">Partenaire 1</div>
              </div>
              <div className="partner-logo">
                <div className="partner-placeholder">Partenaire 2</div>
              </div>
              <div className="partner-logo">
                <div className="partner-placeholder">Partenaire 3</div>
              </div>
              <div className="partner-logo">
                <div className="partner-placeholder">Partenaire 4</div>
              </div>
              <div className="partner-logo">
                <div className="partner-placeholder">Partenaire 5</div>
              </div>
              <div className="partner-logo">
                <div className="partner-placeholder">Partenaire 6</div>
              </div>
            </div>
          </div>
        </section>

        <section id="don" className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>AGISSEZ MAINTENANT</h2>
              <p>Votre don finance des douches, des kits d'hygiène et l'autonomie énergétique des modules.</p>
              <div className="cta-actions">
                <Link href="#contact" className="btn btn--primary">JE FAIS UN DON</Link>
                <Link href="#contact" className="btn btn--ghost">DEVENIR PARTENAIRE</Link>
              </div>
            </div>
        </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
