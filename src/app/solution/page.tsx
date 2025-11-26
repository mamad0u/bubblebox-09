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
                BubbleBox est un module de douches mobile pour apporter l&apos;hygiène à celles et ceux qui en ont le plus besoin.
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
                <h3>Jusqu&apos;à 100 douches par jour</h3>
                <p>Capacité d&apos;accueil théorique pour répondre aux besoins des populations</p>
              </div>
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">📦</div>
                <h3>Conteneur maritime 20 pieds</h3>
                <p>Transport facile et déploiement rapide</p>
              </div>
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">🤝</div>
                <h3>Opéré en commun</h3>
                <p>Avec les associations et acteurs de la solidarité locaux</p>
              </div> 
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">⏰</div>
                <h3>Jusqu&apos;à 50h d&apos;autonomie</h3>
                <p>Objectif de fonctionnement sans être relié au réseau</p>
              </div>
              <div className="mosaic-item mosaic-item--small">
                <div className="mosaic-icon">💧</div>
                <h3>Système de réutilisation d&apos;eau</h3>
                <p>Technologie éco-responsable pour optimiser les ressources</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section avec timeline verticale */}
        <section className="solution-timeline">
          <div className="container">
            <h2>Notre approche en 3 points</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>Mettre l&apos;hygiène en commun</h3>
                  <p>
                    Afin de garantir un accueil inclusif, chaleureux et rassurant aux personnes vulnérables, 
                    nous mettons nos forces au service du collectif. Les modules BubbleBox sont des &quot;communs humanitaires&quot; 
                    développés, déployés et opérés avec les associations, les collectivités et les communautés locales.
                  </p>
                  <Link href="/about" className="btn btn--primary">En savoir plus</Link>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>Minimiser notre empreinte, maximiser l&apos;impact</h3>
                  <p>
                    Pour diminuer notre empreinte environnementale et amplifier notre impact social, nos modules 
                    sont fabriqués avec un maximum de matériaux de seconde main et nous favorisons le recours 
                    aux entreprises d&apos;insertion.
                  </p>
                  <Link href="/durabilite" className="btn btn--primary">En savoir plus</Link>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>S&apos;adapter aux besoins</h3>
                  <p>
                  S'adapter aux besoins de nos bénéficiaires
Plutôt que d'attendre qu'elles viennent à nous, nos modules permettent d'aller vers les populations privées d'accès décent à l'hygiène. BubbleBox est conçu pour s'adapter à différents contextes et situations d'urgence. Nous associons nos partenaires et bénéficiaires à la gouvernance du projet et à son évolution.
                  </p>
                  <Link href="/#impact" className="btn btn--primary">En savoir plus</Link>
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
                <p>Rejoignez-nous dans notre mission d&apos;apporter l&apos;hygiène à tous</p>
              </div>
         
              <div className="cta-actions">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Don" className="btn btn--primary" target="_blank" rel="noopener noreferrer">FAIRE UN DON</Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Contact" className="btn btn--ghost" target="_blank" rel="noopener noreferrer">NOUS CONTACTER</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
