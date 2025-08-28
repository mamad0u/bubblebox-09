'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAnimations } from '../../hooks/useAnimations';

export default function DesignUtilisateur() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section avec design unique */}
        <section className="design-hero-unique">
          <div className="container">
            <div className="design-hero-content">
              <h1>Design centré sur l&apos;utilisateur</h1>
              <p className="hero-subtitle">
                Ramener nos bénéficiaires au centre de notre démarche pour créer des solutions vraiment adaptées à leurs besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Section avec cartes empilées */}
        <section className="design-cards-section">
          <div className="container">
            <div className="cards-stack">
              <div className="card card--main">
                <div className="card-header">
                  <div className="card-number">01</div>
                  <h2>Ramener nos bénéficiaires au centre</h2>
                </div>
                <div className="card-content">
                  <p>
                    BubbleBox a pour but d&apos;associer ses partenaires locaux et bénéficiaires à la gouvernance 
                    du projet. Nous suivons une démarche d&apos;amélioration continue en collectant continuellement 
                    les retours de nos bénéficiaires, en échangeant avec des experts, et en collaborant avec 
                    des ONGs et organismes de recherche.
                  </p>
                </div>
              </div>

              <div className="card card--secondary">
                <div className="card-header">
                  <div className="card-number">02</div>
                  <h2>L&apos;accès à l&apos;hygiène est un droit humain fondamental</h2>
                </div>
                <div className="card-content">
                  <p>
                    L&apos;accès à l&apos;hygiène est un droit humain fondamental qui ignore les frontières et les origines. 
                    Nos publics-cibles sont principalement les êtres humains dépourvus d&apos;accès à l&apos;hygiène, en premier 
                    lieu les personnes sans-abris, mal-logées, migrantes ou réfugiées. Nous nous efforçons de rendre 
                    nos modules accueillant pour toutes et tous.
                  </p>
                </div>
              </div>

              <div className="card card--accent">
                <div className="card-header">
                  <div className="card-number">03</div>
                  <h2>Nous sommes à l&apos;écoute de nos bénéficiaires</h2>
                </div>
                <div className="card-content">
                  <p>
                    Nous sommes à l&apos;écoute de nos bénéficiaires dans leur diversité afin de nous adapter à leurs 
                    besoins et d&apos;améliorer nos modules. Nous concevons BubbleBox en tant que &quot;commun solidaire&quot; 
                    où les personnes marginalisées peuvent bénéficier d&apos;un moment d&apos;intimité pour prendre soin 
                    d&apos;elles-mêmes avant d&apos;interagir avec des bénévoles et de créer du lien avec une communauté locale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section des principes avec design circulaire */}
        <section className="design-principles-circular">
          <div className="container">
            <h2>Nos principes de communication</h2>
            <p className="section-intro">
              Afin d&apos;entretenir une relation de confiance, BubbleBox et ses partenaires s&apos;engagent à 
              communiquer avec nos bénéficiaires selon des principes clés.
            </p>
            <div className="principles-grid">
              <div className="principle-item principle--empathy">
                <div className="principle-icon">💙</div>
                <h3>Empathie</h3>
                <p>Comprendre et ressentir les besoins de chacun</p>
              </div>
              <div className="principle-item principle--respect">
                <div className="principle-icon">🤝</div>
                <h3>Respect</h3>
                <p>Traiter chaque personne avec dignité</p>
              </div>
              <div className="principle-item principle--inclusivity">
                <div className="principle-icon">🌈</div>
                <h3>Inclusivité</h3>
                <p>Accueillir toutes et tous sans discrimination</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section finale avec design en escalier */}
        <section className="design-final-steps">
          <div className="container">
            <div className="steps-container">
              <div className="step step--1">
                <h3>Mission d&apos;information</h3>
                <p>
                  Nous poursuivons une mission d&apos;information sur les inégalités d&apos;accès 
                  à l&apos;hygiène et défendons publiquement le droit d&apos;accès à l&apos;hygiène pour toutes et tous.
                </p>
              </div>
              <div className="step step--2">
                <h3>Plaidoyer public</h3>
                <p>
                  Nous défendons activement le droit à l&apos;hygiène et sensibilisons 
                  l&apos;opinion publique aux enjeux d&apos;accès à l&apos;hygiène.
                </p>
              </div>
              <div className="step step--3">
                <h3>Amélioration continue</h3>
                <p>
                  Nous collectons continuellement les retours et adaptons 
                  nos solutions aux besoins réels des bénéficiaires.
                </p>
              </div>
            </div>
            <div className="final-actions">
              <Link href="/#impact" className="btn btn--primary">DÉCOUVRIR NOTRE IMPACT</Link>
              <Link href="/#contact" className="btn btn--ghost">NOUS CONTACTER</Link>
            </div>
          </div>
        </section>

        {/* CTA Section avec design unique */}
        <section className="design-cta-unique">
          <div className="container">
            <div className="cta-content">
              <h2>Ensemble, créons des solutions vraiment humaines</h2>
              <p>Votre soutien nous aide à maintenir nos bénéficiaires au cœur de notre démarche</p>
              <div className="cta-actions">
                <Link href="/#don" className="btn btn--primary">FAIRE UN DON</Link>
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
