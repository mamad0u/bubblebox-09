'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAnimations } from '../../hooks/useAnimations';

export default function SolutionDynamique() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section avec design dynamique */}
        <section className="solution-dynamique-hero">
          <div className="container">
            <div className="solution-dynamique-hero-content">
              <h1>Solution Dynamique</h1>
              <p className="hero-subtitle">
                S'adapter aux besoins plutôt que d'attendre que nos publics-cibles viennent à nous.
              </p>
              <div className="hero-adaptability">
                <div className="adaptability-item">
                  <span className="adaptability-icon">🚚</span>
                  <span className="adaptability-label">Mobile</span>
                </div>
                <div className="adaptability-item">
                  <span className="adaptability-icon">🔄</span>
                  <span className="adaptability-label">Flexible</span>
                </div>
                <div className="adaptability-item">
                  <span className="adaptability-icon">⚡</span>
                  <span className="adaptability-label">Rapide</span>
                </div>
                <div className="adaptability-item">
                  <span className="adaptability-icon">🌍</span>
                  <span className="adaptability-label">Universel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section approche avec design en vagues */}
        <section className="solution-dynamique-approach">
          <div className="container">
            <div className="approach-content">
              <h2>Notre approche : aller vers les populations</h2>
              <p>
                Plutôt que d'attendre que nos publics-cibles viennent à nous, nos modules permettent d'aller 
                vers les populations privées d'accès décent à l'hygiène. BubbleBox est conçu pour s'adapter 
                à différents contextes et lieux de déploiements, pour répondre aux besoins de plusieurs 
                catégories de bénéficiaires et même d'être déployé en situation d'urgence, par exemple 
                en réponse à des catastrophes naturelles.
              </p>
            </div>
            <div className="approach-visual">
              <div className="wave-container">
                <div className="wave wave--1">🚚</div>
                <div className="wave wave--2">💧</div>
                <div className="wave wave--3">🤝</div>
                <div className="wave wave--4">🏠</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section équipements avec design en grille dynamique */}
        <section className="solution-dynamique-equipment">
          <div className="container">
            <h2>Équipements du module</h2>
            <div className="equipment-grid">
              <div className="equipment-main">
                <div className="equipment-icon">🚿</div>
                <h3>3 cabines de douches individuelles</h3>
                <p>Espace privé et confortable pour chaque bénéficiaire</p>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon">🔥</div>
                <h4>Chauffe-eau</h4>
                <p>Eau chaude disponible en permanence</p>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon">💧</div>
                <h4>Système de filtration</h4>
                <p>Réutilisation et purification de l'eau</p>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon">🧴</div>
                <h4>Produits d'hygiène</h4>
                <p>Stockage et distribution organisés</p>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon">🛁</div>
                <h4>Serviettes</h4>
                <p>Réserve de serviettes propres</p>
              </div>
              <div className="equipment-item">
                <div className="equipment-icon">👕</div>
                <h4>Lave-linge/Sèche-linge</h4>
                <p>Entretien des serviettes et vêtements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section contextes avec design en carte interactive */}
        <section className="solution-dynamique-contexts">
          <div className="container">
            <h2>Contextes d'intervention variés</h2>
            <div className="contexts-map">
              <div className="context-card context--urban">
                <div className="context-header">
                  <div className="context-icon">🏙️</div>
                  <h3>Milieu urbain</h3>
                </div>
                <div className="context-content">
                  <p>Personnes sans-abris et mal-logées dans les villes</p>
                  <div className="context-features">
                    <span>• Campements informels</span>
                    <span>• Zones périphériques</span>
                    <span>• Centres-villes</span>
                  </div>
                </div>
              </div>
              <div className="context-card context--rural">
                <div className="context-header">
                  <div className="context-icon">🌾</div>
                  <h3>Espace rural</h3>
                </div>
                <div className="context-content">
                  <p>Camps de personnes exilées dans les espaces ruraux</p>
                  <div className="context-features">
                    <span>• Zones isolées</span>
                    <span>• Territoires ruraux</span>
                    <span>• Accès limité</span>
                  </div>
                </div>
              </div>
              <div className="context-card context--emergency">
                <div className="context-header">
                  <div className="context-icon">🚨</div>
                  <h3>Situations d'urgence</h3>
                </div>
                <div className="context-content">
                  <p>Catastrophes naturelles et crises humanitaires</p>
                  <div className="context-features">
                    <span>• Déploiement rapide</span>
                    <span>• Adaptation immédiate</span>
                    <span>• Réponse d'urgence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section inspiration avec design en timeline horizontale */}
        <section className="solution-dynamique-inspiration">
          <div className="container">
            <h2>Inspirations internationales</h2>
            <div className="inspiration-timeline">
              <div className="timeline-point">
                <div className="point-marker">🌍</div>
                <h3>Infrastructures publiques</h3>
                <p>Bains publics du monde entier qui assurent un accès minimal pour toutes et tous</p>
              </div>
              <div className="timeline-connector">→</div>
              <div className="timeline-point">
                <div className="point-marker">🚚</div>
                <h3>Mini-bains publics sur roues</h3>
                <p>BubbleBox conçu pour apporter l'hygiène partout</p>
              </div>
              <div className="timeline-connector">→</div>
              <div className="timeline-point">
                <div className="point-marker">💡</div>
                <h3>Solution résiliente</h3>
                <p>Efficace et adaptable aux situations de crise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section développement avec design en escalier dynamique */}
        <section className="solution-dynamique-development">
          <div className="container">
            <h2>Développement continu</h2>
            <div className="development-steps">
              <div className="development-step step--current">
                <div className="step-indicator">
                  <span className="step-number">Maintenant</span>
                  <div className="step-progress"></div>
                </div>
                <div className="step-content">
                  <h3>Solution efficace et résiliente</h3>
                  <p>
                    Nous continuons de développer BubbleBox comme une solution efficace et résiliente 
                    pour apporter un accès à l'hygiène aux personnes vulnérables en situation de crise 
                    afin d'aider à protéger leur santé et leur dignité.
                  </p>
                </div>
              </div>
              <div className="development-step step--future">
                <div className="step-indicator">
                  <span className="step-number">Avenir</span>
                  <div className="step-progress step-progress--future"></div>
                </div>
                <div className="step-content">
                  <h3>Évolution et amélioration</h3>
                  <p>Adaptation continue aux nouveaux besoins et contextes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section avec design unique */}
        <section className="solution-dynamique-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Prêt à déployer notre solution dynamique ?</h2>
              <p>BubbleBox s'adapte à vos besoins et contextes spécifiques</p>
              <div className="cta-actions">
                <Link href="/#contact" className="btn btn--primary">NOUS CONTACTER</Link>
                <Link href="/solution" className="btn btn--ghost">DÉCOUVRIR LA SOLUTION</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
