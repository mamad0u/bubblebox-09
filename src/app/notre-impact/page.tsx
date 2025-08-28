'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAnimations } from '../../hooks/useAnimations';

export default function NotreImpact() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section avec design d'impact */}
        <section className="impact-hero">
          <div className="container">
            <div className="impact-hero-content">
              <h1>Notre Impact</h1>
              <p className="hero-subtitle">
                Des années de développement qui se concrétisent en impact réel sur le terrain.
              </p>
            </div>
          </div>
        </section>

        {/* Section historique avec design en timeline verticale */}
        <section className="impact-history">
          <div className="container">
            <h2>Notre parcours</h2>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-marker">🏭</div>
                <div className="timeline-content">
                  <h3>Construction du premier module</h3>
                  <p>
                    Après des années de développement, nous avons construit notre premier module 
                    avec une petite entreprise basée à Polliat (Ain).
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">🚀</div>
                <div className="timeline-content">
                  <h3>Inauguration à Bordeaux</h3>
                  <p>
                    Le premier module BubbleBox a été inauguré à Bordeaux en juillet 2021, 
                    en partenariat avec la Ville et la Croix-Rouge Française.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section chiffres-clés avec design en grille dynamique */}
        <section className="impact-key-figures">
          <div className="container">
            <h2>Chiffres-clés</h2>
            <div className="figures-grid">
              <div className="figure-item figure--highlight">
                <div className="figure-number">1200+</div>
                <div className="figure-label">douches gratuites</div>
                <div className="figure-icon">🚿</div>
              </div>
              <div className="figure-item">
                <div className="figure-number">1000+</div>
                <div className="figure-label">heures d&apos;accueil</div>
                <div className="figure-icon">⏰</div>
              </div>
              <div className="figure-item">
                <div className="figure-number">6</div>
                <div className="figure-label">partenaires d&apos;opération</div>
                <div className="figure-icon">🤝</div>
              </div>
              <div className="figure-item">
                <div className="figure-number">100+</div>
                <div className="figure-label">kg de produits distribués</div>
                <div className="figure-icon">🧴</div>
              </div>
              <div className="figure-item figure--infinite">
                <div className="figure-number">∞</div>
                <div className="figure-label">moments humains</div>
                <div className="figure-icon">💙</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section triple impact avec design en pyramide inversée */}
        <section className="impact-triple">
          <div className="container">
            <h2>Triple impact positif</h2>
            <p className="section-intro">
              BubbleBox a un triple impact positif. En offrant un accès gratuit à l&apos;hygiène 
              à celles et ceux qui en ont le plus besoin, nous contribuons à améliorer :
            </p>
            <div className="triple-impact">
              <div className="impact-level impact--individual">
                <div className="impact-icon">💙</div>
                <h3>Bien-être des bénéficiaires</h3>
                <p>Amélioration de la qualité de vie et de la dignité</p>
              </div>
              <div className="impact-level impact--health">
                <div className="impact-icon">🏥</div>
                <h3>Santé individuelle</h3>
                <p>Prévention des maladies et amélioration de l&apos;hygiène</p>
              </div>
              <div className="impact-level impact--public">
                <div className="impact-icon">🌍</div>
                <h3>Santé publique</h3>
                <p>Impact collectif sur la santé de la communauté</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section modèle collaboratif avec design en réseau */}
        <section className="impact-collaboration">
          <div className="container">
            <div className="collaboration-content">
              <h2>Modèle d&apos;opération collaboratif</h2>
              <p>
                Notre modèle d&apos;opération collaboratif encourage également la mise en place de nouvelles 
                coopérations entre associations, services publics et communautés locales, ce qui inclut 
                même nos bénéficiaires !
              </p>
              <div className="collaboration-benefits">
                <div className="benefit">
                  <span className="benefit-icon">🤝</span>
                  <span>Nouvelles coopérations</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🏛️</span>
                  <span>Services publics</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">👥</span>
                  <span>Communautés locales</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">💙</span>
                  <span>Bénéficiaires inclus</span>
                </div>
              </div>
            </div>
            <div className="collaboration-partners">
              <h3>BubbleBox est opéré en collaboration avec :</h3>
              <div className="partners-carousel">
                <div className="partner-item">
                  <div className="partner-icon">🤝</div>
                  <span className="partner-name">Les Gratuits</span>
                </div>
                <div className="partner-item">
                  <div className="partner-icon">💙</div>
                  <span className="partner-name">Un Espoir Solidaire</span>
                </div>
                <div className="partner-item">
                  <div className="partner-icon">🏥</div>
                  <span className="partner-name">Croix-Rouge Française</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section découverte avec design en cartes interactives */}
        <section className="impact-discovery">
          <div className="container">
            <h2>Découvrez nos impacts et nos projets dans le détail</h2>
            <div className="discovery-cards">
              <div className="discovery-card">
                <div className="card-icon">📊</div>
                <h3>Rapports d&apos;activités</h3>
                <p>Consultez nos rapports détaillés et nos statistiques</p>
                <Link href="/#contact" className="btn btn--primary">DEMANDER LES RAPPORTS</Link>
              </div>
              <div className="discovery-card">
                <div className="card-icon">📈</div>
                <h3>Évolution des projets</h3>
                <p>Suivez le développement de nos initiatives</p>
                <Link href="/solution" className="btn btn--primary">DÉCOUVRIR NOS PROJETS</Link>
              </div>
              <div className="discovery-card">
                <div className="card-icon">🎯</div>
                <h3>Objectifs futurs</h3>
                <p>Découvrez nos ambitions et nos prochaines étapes</p>
                <Link href="/#mission" className="btn btn--primary">VOIR NOS OBJECTIFS</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section avec design unique */}
        <section className="impact-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Rejoignez notre impact</h2>
              <p>Ensemble, créons un avenir où l&apos;hygiène est accessible à tous</p>
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
