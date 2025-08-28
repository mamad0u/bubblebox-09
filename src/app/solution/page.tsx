'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAnimations } from '../../hooks/useAnimations';

export default function Solution() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section avec gradient unique */}
        <section className="solution-hero">
          <div className="container">
            <div className="solution-hero-content">
              <h1>La Solution</h1>
              <p className="hero-subtitle">
                BubbleBox est un module de douches mobile pour apporter l'hygiène à celles et ceux qui en ont le plus besoin.
              </p>
   
            </div>
          </div>
        </section>

        {/* Grille de caractéristiques en mosaïque */}
        <section className="solution-features-mosaic">
          <div className="container">
            <h2>Caractéristiques techniques</h2>
            <div className="mosaic-grid">
              <div className="mosaic-item mosaic-item--large">
                <div className="mosaic-icon">🚿</div>
                <h3>Jusqu'à 100 douches par jour</h3>
                <p>Capacité d'accueil élevée pour répondre aux besoins des populations</p>
              </div>
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">📦</div>
                <h3>Conteneur mobile 20 pieds</h3>
                <p>Transport facile et déploiement rapide</p>
              </div>
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">🤝</div>
                <h3>Opéré en commun</h3>
                <p>Collaboration avec associations locales</p>
              </div>
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">⏰</div>
                <h3>50h d'autonomie</h3>
                <p>Fonctionnement indépendant</p>
              </div>
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">💧</div>
                <h3>Système de réutilisation d'eau</h3>
                <p>Technologie éco-responsable pour optimiser les ressources</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section avec timeline verticale */}
        <section className="solution-timeline">
          <div className="container">
            <h2>Notre approche en 4 étapes</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>Mettre l'hygiène en commun</h3>
                  <p>
                    Afin de garantir un accueil inclusif, chaleureux et rassurant aux personnes vulnérables, 
                    nous mettons nos forces au service du collectif. Les modules BubbleBox sont des "communs humanitaires" 
                    développés, déployés et opérés avec les associations, les collectivités et les communautés locales.
                  </p>
                  <Link href="/about" className="btn btn--primary">En savoir plus</Link>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>Minimiser notre empreinte, maximiser l'impact</h3>
                  <p>
                    Pour diminuer notre empreinte environnementale et amplifier notre impact social, nos modules 
                    sont fabriqués avec un maximum de matériaux de seconde main et nous favorisons le recours 
                    aux entreprises d'insertion.
                  </p>
                  <Link href="/durabilite" className="btn btn--primary">En savoir plus</Link>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>S'adapter aux besoins</h3>
                  <p>
                    Plutôt que d'attendre que nos publics-cibles viennent à nous, nos modules permettent d'aller 
                    vers les populations privées d'accès décent à l'hygiène. BubbleBox est conçu pour s'adapter 
                    à différents contextes et situations d'urgence.
                  </p>
                  <Link href="/#impact" className="btn btn--primary">En savoir plus</Link>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <h3>Ramener nos bénéficiaires au centre</h3>
                  <p>
                    BubbleBox a pour but d'associer ses partenaires locaux et bénéficiaires à la gouvernance 
                    du projet. Nous suivons une démarche d'amélioration continue en collectant les retours.
                  </p>
                  <Link href="/design-utilisateur" className="btn btn--primary">En savoir plus</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA avec design unique */}
        <section className="solution-cta-unique">
          <div className="container">
            <div className="cta-content">
              <div className="cta-text">
                <h2>Prêt à soutenir notre solution ?</h2>
                <p>Rejoignez-nous dans notre mission d'apporter l'hygiène à tous</p>
              </div>
         
              <div className="cta-actions">
                <Link href="/#don" className="btn btn--primary">FAIRE UN DON</Link>
                <Link href="/#contact" className="btn btn--ghost">NOUS CONTACTER</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
