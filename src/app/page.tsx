'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function HomePage() {
  useAnimations();

  return (
    <div className="home-page">
      <Header />
      
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>BubbleBox</h1>
              <p className="hero-subtitle">
                L&apos;hygiène pour tous, partout
              </p>
              <p className="hero-description">
                Nous concevons, construisons et déployons des modules humanitaires 
                durables pour améliorer l&apos;accès à l&apos;hygiène des personnes 
                sans-abri, mal-logées, migrantes et réfugiées.
              </p>
              <div className="hero-actions">
                <a href="#mission" className="btn btn--primary">DÉCOUVRIR</a>
                <a href="#contact" className="btn btn--ghost">NOUS CONTACTER</a>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="mission">
          <div className="container">
            <h2>Notre mission</h2>
            <div className="mission-content">
              <p>
                BubbleBox est une association reconnue d&apos;intérêt général basée 
                à Paris. Notre mission est d&apos;améliorer l&apos;accès à l&apos;hygiène 
                des personnes sans-abri, mal-logées, migrantes et réfugiées.
              </p>
              <p>
                Nous concevons, construisons et déployons des modules humanitaires 
                durables pour garantir un accès de base à l&apos;hygiène pour tous 
                et partout.
              </p>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Notre solution</h2>
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

        <section className="approach">
          <div className="container">
            <h2>Notre approche</h2>
            <div className="approach-content">
              <div className="approach-item">
                <h3>Mettre l&apos;hygiène en commun</h3>
                <p>
                  Afin de garantir un accueil inclusif, chaleureux et rassurant aux 
                  personnes vulnérables, nous mettons nos forces au service du collectif. 
                  Les modules BubbleBox sont des &quot;communs humanitaires&quot; développés, 
                  déployés et opérés avec les associations, les collectivités et les 
                  communautés locales pour renforcer le tissu de solidarité existant, 
                  s&apos;adapter à chaque contexte et maximiser notre impact.
                </p>
                <a href="/collaboration" className="btn btn--primary">En savoir plus</a>
              </div>
              
              <div className="approach-item">
                <h3>Minimiser notre empreinte, maximiser l&apos;impact</h3>
                <p>
                  Pour diminuer notre empreinte environnementale et amplifier notre 
                  impact social, nos modules sont fabriqués avec un maximum de matériaux 
                  de seconde main et nous favorisons le recours aux entreprises d&apos;insertion. 
                  Nous travaillons aussi à l&apos;élaboration de systèmes de filtration 
                  pour réduire la consommation en eau de nos modules et permettre leur 
                  opération en autonomie jusqu&apos;à 3 jours.
                </p>
                <a href="/durabilite" className="btn btn--primary">En savoir plus</a>
              </div>
              
              <div className="approach-item">
                <h3>S&apos;adapter aux besoins</h3>
                <p>
                  Plutôt que d&apos;attendre que nos publics-cibles viennent à nous, 
                  nos modules permettent d&apos;aller vers les populations privées 
                  d&apos;accès décent à l&apos;hygiène. BubbleBox est conçu pour 
                  s&apos;adapter à différents contextes et lieux de déploiements, 
                  pour répondre aux besoins de plusieurs catégories de bénéficiaires 
                  et même d&apos;être déployé en situation d&apos;urgence, par exemple 
                  en réponse à des catastrophes naturelles.
                </p>
                <a href="/solution-dynamique" className="btn btn--primary">En savoir plus</a>
              </div>
              
              <div className="approach-item">
                <h3>Ramener nos bénéficiaires au centre</h3>
                <p>
                  BubbleBox a pour but d&apos;associer ses partenaires locaux et 
                  bénéficiaires à la gouvernance du projet. Nous suivons une démarche 
                  d&apos;amélioration continue en collectant continuellement les 
                  retours de nos bénéficiaires, en échangeant avec des experts, et 
                  en collaborant avec des ONGs et organismes de recherche.
                </p>
                <a href="/design-utilisateur" className="btn btn--primary">En savoir plus</a>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Prêt à soutenir notre mission ?</h2>
              <p>Rejoignez-nous dans notre combat pour l&apos;accès à l&apos;hygiène pour tous</p>
              <div className="cta-actions">
                <a href="#don" className="btn btn--primary">FAIRE UN DON</a>
                <a href="#contact" className="btn btn--ghost">NOUS CONTACTER</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
