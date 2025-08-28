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
                <h2>Minimiser notre empreinte, maximiser l'impact</h2>
                <p>
                  Pour diminuer notre empreinte environnementale et amplifier notre impact social, nos modules 
                  sont fabriqués avec un maximum de matériaux de seconde main et nous favorisons le recours 
                  aux entreprises d'insertion pour leur construction et leur maintenance.
                </p>
                <div className="impact-highlights">
                  <div className="highlight">
                    <span className="highlight-icon">🏭</span>
                    <span>Entreprises d'insertion</span>
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
                    <span className="stat-number">80%</span>
                    <span className="stat-label">Matériaux recyclés</span>
                  </div>
                  <div className="eco-stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Entreprises d'insertion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section innovation avec grille hexagonale */}
        <section className="durabilite-innovation-hex">
          <div className="container">
            <h2>Innovation technologique au service de l'autonomie</h2>
            <p className="section-intro">
              Nous collaborons avec des startups spécialisées dans l'élaboration de systèmes de filtration. 
              En réutilisant une partie de l'eau, nous pouvons réduire la consommation de nos modules et 
              permettre leur opération sur des sites sans accès aux réseaux de distribution hydro-électrique.
            </p>
            <div className="hex-grid">
              <div className="hex-item hex-item--large">
                <div className="hex-icon">💧</div>
                <h3>Système de filtration</h3>
                <p>Réutilisation de l'eau pour réduire la consommation et optimiser les ressources</p>
              </div>
              <div className="hex-item">
                <div className="hex-icon">☀️</div>
                <h3>Panneaux solaires</h3>
                <p>Énergie renouvelable pour l'autonomie</p>
              </div>
              <div className="hex-item">
                <div className="hex-icon">🔋</div>
                <h3>Stockage d'énergie</h3>
                <p>Jusqu'à 3 jours d'autonomie complète</p>
              </div>
              <div className="hex-item">
                <div className="hex-icon">🌱</div>
                <h3>Éco-conception</h3>
                <p>Design respectueux de l'environnement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section autonomie avec design en escalier */}
        <section className="durabilite-autonomie-steps">
          <div className="container">
            <h2>Notre ambition : l'autonomie totale</h2>
            <div className="autonomie-progression">
              <div className="progression-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Filtration de l'eau</h3>
                  <p>Réutilisation et purification pour réduire la consommation</p>
                </div>
              </div>
              <div className="progression-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Énergie solaire</h3>
                  <p>Panneaux photovoltaïques pour l'autonomie énergétique</p>
                </div>
              </div>
              <div className="progression-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Stockage intelligent</h3>
                  <p>Batteries et réservoirs pour 3 jours d'autonomie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section produits avec design en cascade */}
        <section className="durabilite-produits-cascade">
          <div className="container">
            <h2>Produits d'hygiène durables et responsables</h2>
            <div className="cascade-layout">
              <div className="cascade-item cascade-item--main">
                <h3>Distribution responsable</h3>
                <p>
                  BubbleBox s'engage à distribuer des produits d'hygiène invendus ou non-utilisés à ses 
                  bénéficiaires, tout en minimisant ses empreintes environnementales de la fabrication 
                  à l'opération des modules.
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
              <p>Ensemble, créons un standard de durabilité pour l'hygiène mobile</p>
              <div className="cta-actions">
                <Link href="/#don" className="btn btn--primary">FAIRE UN DON</Link>
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

