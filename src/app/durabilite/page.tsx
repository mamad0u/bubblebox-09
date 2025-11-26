'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAnimations } from '../../hooks/useAnimations';

export default function Durabilite() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section avec design unique */}
        <section className="durabilite-hero-unique">
          <div className="container">
            <div className="durabilite-hero-content">
              <h1>Durabilité</h1>
              <p className="hero-subtitle">
                Minimiser notre empreinte environnementale tout en maximisant notre impact social pour un avenir plus durable.
              </p>
            </div>
          </div>
        </section>

        {/* Section principale avec design asymétrique */}
        <section className="durabilite-main-asymmetric">
          <div className="container">
            <div className="asymmetric-layout">
              <div className="content-block content-block--large">
                <h2>Minimiser notre empreinte, maximiser l&apos;impact</h2>
                <p>
                  Pour diminuer notre empreinte environnementale et amplifier notre impact social, nos modules 
                  sont fabriqués avec un maximum de matériaux de seconde main et nous favorisons le recours 
                  aux entreprises d&apos;insertion pour leur construction et leur maintenance.
                </p>
                <div className="impact-highlights">
                  <div className="highlight">
                    <span className="highlight-icon">🏭</span>
                    <span>Entreprises d&apos;insertion</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-icon">♻️</span>
                    <span>Matériaux de seconde main</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-icon">🤝</span>
                    <span>Impact social amplifié</span>
                  </div>
                </div>
              </div>
              <div className="content-block content-block--small">
                <div className="eco-stats">
                  <div className="eco-stat">
                    <span className="stat-label">Des conteneurs "derniers voyages" upcyclés</span>
                  </div>
                  <div className="eco-stat">
                    <span className="stat-label">Des structures d'insertion comme partenaire d'entretien et de construction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section innovation avec grille hexagonale */}
        <section className="durabilite-innovation-hex">
          <div className="container">
            <h2>L'innovation au service de l'autonomie</h2>
            <p className="section-intro">
            Nous collaborons avec la Fondation Véolia et des startups spécialisées afin d'élaborer notre système de filtration.
            En réutilisant une partie de l'eau, nous pouvons réduire la consommation de nos modules. A terme, nous voulons équiper nos modules avec des panneaux solaires et un stockage d'énergie pour les opérer même sur des sites sans accès aux réseaux d'eau et d'électricité.
            </p>
            <div className="hex-grid">
              <div className="hex-item hex-item--full-width">
                <div className="hex-icon">🌱</div>
                <h3>Éco-conception</h3>
                <p>Design respectueux de l&apos;environnement</p>
              </div>
              <div className="hex-item">
                <div className="hex-icon">💧</div>
                <h3>Système de filtration</h3>
                <p>Réutilisation de l&apos;eau pour réduire la consommation et optimiser nos ressources</p>
              </div>
              <div className="hex-item">
                <div className="hex-icon">☀️</div>
                <h3>Panneaux solaires</h3>
                <p>Diminution de notre consommation d'énergie</p>
              </div>
              <div className="hex-item">
                <div className="hex-icon">🔋</div>
                <h3>Stockage d&apos;énergie</h3>
                <p>Pour avoir de l'eau chaude, même les mauvais jours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section autonomie avec design en escalier */}
        <section className="durabilite-autonomie-steps">
          <div className="container">
            <h2>Notre ambition : fonctionner en autonomie pendant 3 jours!</h2>
          <p>L'autonomie partielle permet à la fois de diminuer les empreintes environnementales du module tout en permettant son opération dans de nouveaux contextes, par exemple dans des milieux reculés ou en cas de catastrophe naturelle. Lorsque les réserves sont vides, le module pourrait être rechargé dans une base arrière ou bien sur place (par exemple par watertrucking).
          </p>
          </div>
        </section>

        {/* Section produits avec design en cascade */}
        <section className="durabilite-produits-cascade">
          <div className="container">
            <h2>Produits d&apos;hygiène durables et responsables</h2>
            <div className="cascade-layout">
              <div className="cascade-item cascade-item--main">
                <h3>Penser la durabilité à chaque étape</h3>
                <p>
                  BubbleBox s&apos;engage à distribuer des produits d&apos;hygiène invendus ou non-utilisés à ses 
                  bénéficiaires, tout en minimisant ses empreintes environnementales de la fabrication 
                  à l&apos;opération des modules.
                </p>
              </div>
              <div className="cascade-item cascade-item--side">
                <div className="benefit-tag">
                  <span className="tag-icon">♻️</span>
                  <span>Réduction des déchets</span>
                </div>
              </div>
              <div className="cascade-item cascade-item--side">
                <div className="benefit-tag">
                  <span className="tag-icon">🌱</span>
                  <span>Impact minimal</span>
                </div>
              </div>
              <div className="cascade-item cascade-item--side">
                <div className="benefit-tag">
                  <span className="tag-icon">🤝</span>
                  <span>Économie circulaire</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section avec design unique */}
        <section className="durabilite-cta-unique">
          <div className="container">
            <div className="cta-content">
              <h2>Soutenez notre vision durable</h2>
              <p>Ensemble, créons un standard de durabilité pour l&apos;hygiène mobile</p>
              <div className="cta-actions">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Don" className="btn btn--primary" target="_blank" rel="noopener noreferrer">FAIRE UN DON</Link>
                <Link href="/solution" className="btn btn--ghost">DÉCOUVRIR NOTRE SOLUTION</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

