'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function SolutionPage() {
  useAnimations();

  return (
    <div className="solution-page">
      <Header />
      
      <main>
        <section className="hero-solution">
          <div className="container">
            <h1>La solution</h1>
            <p className="lead">
              BubbleBox est un module de douches mobile pour apporter l&apos;hygiène à celles et ceux qui en ont le plus besoin
            </p>
          </div>
        </section>

        <section className="solution-features">
          <div className="container">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🚿</div>
                <h3>Jusqu&apos;à 100 douches par jour</h3>
                <p>Capacité d&apos;accueil élevée pour répondre aux besoins des populations</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📦</div>
                <h3>Conteneur mobile 20 pieds</h3>
                <p>Transport facile et déploiement rapide sur tous types de terrains</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h3>Opéré en commun</h3>
                <p>Collaboration avec les associations et collectivités locales</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>Jusqu&apos;à 50 heures d&apos;autonomie</h3>
                <p>Fonctionnement indépendant grâce aux panneaux solaires et batteries</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-features-mosaic">
          <div className="container">
            <div className="mosaic-layout">
              <div className="mosaic-item mosaic-item--large">
                <h2>Module d&apos;hygiène mobile</h2>
                <p>
                  Notre module BubbleBox est conçu comme une solution complète et autonome 
                  pour apporter l&apos;accès à l&apos;hygiène dans les zones où les 
                  infrastructures sont insuffisantes ou inexistantes.
                </p>
                <p>
                  Équipé de 3 cabines de douches individuelles, d&apos;un espace technique 
                  avec chauffe-eau et système de filtration, et d&apos;espaces de stockage 
                  pour les produits d&apos;hygiène et serviettes.
                </p>
              </div>
              
              <div className="mosaic-item mosaic-item--small">
                <h3>Adaptabilité</h3>
                <p>S&apos;adapte à différents contextes et lieux de déploiement</p>
              </div>
              
              <div className="mosaic-item mosaic-item--small">
                <h3>Résilience</h3>
                <p>Conçu pour fonctionner en situation d&apos;urgence</p>
              </div>
              
              <div className="mosaic-item mosaic-item--small">
                <h3>Durabilité</h3>
                <p>Matériaux de seconde main et entreprises d&apos;insertion</p>
              </div>
              
              <div className="mosaic-item mosaic-item--small">
                <h3>Autonomie</h3>
                <p>Jusqu&apos;à 3 jours d&apos;autonomie complète</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-context">
          <div className="container">
            <h2>Contexte d&apos;utilisation</h2>
            <div className="context-content">
              <p>
                Le manque d&apos;accès à l&apos;hygiène touche des populations dans des 
                contextes variés : personnes sans-abris et mal-logées dans les villes, 
                campements informels en périphéries, camps de personnes exilées dans les 
                espaces ruraux...
              </p>
              <p>
                BubbleBox est inspiré par les infrastructures d&apos;hygiène publiques du 
                monde entier qui assurent ou ont assuré un accès minimal pour toutes et tous. 
                Nos modules sont conçus comme des &quot;mini-bains publics sur roues&quot; 
                pour apporter l&apos;hygiène partout, surtout lorsque les solutions 
                individuelles et temporaires sont sous-dimensionnées.
              </p>
            </div>
          </div>
        </section>

        <section className="solution-impact">
          <div className="container">
            <h2>Impact et bénéficiaires</h2>
            <div className="impact-content">
              <p>
                L&apos;accès à l&apos;hygiène est un droit humain fondamental qui ignore 
                les frontières et les origines. Nos publics-cibles sont principalement les 
                êtres humains dépourvus d&apos;accès à l&apos;hygiène, en premier lieu 
                les personnes sans-abris, mal-logées, migrantes ou réfugiées.
              </p>
              <p>
                Nous nous efforçons de rendre nos modules accueillant pour toutes et tous. 
                Nous sommes à l&apos;écoute de nos bénéficiaires dans leur diversité afin 
                de nous adapter à leurs besoins et d&apos;améliorer nos modules.
              </p>
              <p>
                Nous concevons BubbleBox en tant que &quot;commun solidaire&quot; où les 
                personnes marginalisées peuvent bénéficier d&apos;un moment d&apos;intimité 
                pour prendre soin d&apos;elles-mêmes avant d&apos;interagir avec des 
                bénévoles de plusieurs associations et de créer du lien avec une communauté locale.
              </p>
            </div>
          </div>
        </section>

        <section className="solution-principles">
          <div className="container">
            <h2>Nos principes d&apos;opération</h2>
            <div className="principles-content">
              <p>
                Afin d&apos;entretenir une relation de confiance, BubbleBox et ses partenaires 
                s&apos;engagent à communiquer avec nos bénéficiaires selon des principes 
                d&apos;empathie, de respect et d&apos;inclusivité.
              </p>
              <p>
                Enfin, nous poursuivons également une mission d&apos;information sur les 
                inégalités d&apos;accès à l&apos;hygiène et défendons publiquement le droit 
                d&apos;accès à l&apos;hygiène pour toutes et tous.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
