'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAnimations } from '../../hooks/useAnimations';

export default function Team() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="team-hero">
          <div className="container">
            <div className="team-hero-content">
              <h1>Notre Équipe</h1>
              <p className="hero-subtitle">
                Une équipe passionnée et engagée pour améliorer l&apos;accès à l&apos;hygiène pour tous.
              </p>
            </div>
          </div>
        </section>

        {/* Équipe Principale Section */}
        <section className="team-main-section">
          <div className="container">
            <h2>L&apos;Équipe Fondatrice</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <span>A</span>
                </div>
                <div className="member-info">
                  <h3>Anthony Crepin</h3>
                  <p className="member-role">Président, Chef de projet en génie climatique et membre des ERU de la Croix-Rouge</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <span>P</span>
                </div>
                <div className="member-info">
                  <h3>Pierre Noro</h3>
                  <p className="member-role">Co-fondateur, Secrétaire Général, expert en innovation sociale et en éthique des nouvelles technologies</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <span>A</span>
                </div>
                <div className="member-info">
                  <h3>Amine Kasbaoui</h3>
                  <p className="member-role">Trésorier, contrôleur de gestion dans le milieu hospitalier</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <span>M</span>
                </div>
                <div className="member-info">
                  <h3>Maxime Noro</h3>
                  <p className="member-role">Tech Lead, Ingénieur d&apos;études en génie mécanique qui s&apos;active pour un monde meilleur</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <span>E</span>
                </div>
                <div className="member-info">
                  <h3>Elliott Veyssiere</h3>
                  <p className="member-role">Responsable Com, Apprenti ingénieur</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <span>J</span>
                </div>
                <div className="member-info">
                  <h3>Juno Lee</h3>
                  <p className="member-role">Graphiste et illustratrice passionnée par les histoires qui inspirent les gens</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-avatar">
                  <span>G</span>
                </div>
                <div className="member-info">
                  <h3>Gözde Onaran</h3>
                  <p className="member-role">Graphiste qui met ses talents au service de l&apos;humanitaire</p>
                </div>
              </div>
            </div>

            <div className="team-acknowledgment">
              <p>
                Et toutes celles et ceux qui nous ont aidé en chemin : <strong>Christina, Anna, Alain, Rob...</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Rejoindre l'Équipe Section */}
        <section className="join-team-section">
          <div className="container">
            <h2>Rejoignez l&apos;équipe !</h2>
            <div className="join-team-content">
              <p className="join-intro">
                BubbleBox est un projet humanitaire en pleine évolution. Notre équipe accueille toutes celles et ceux qui veulent 
                contribuer du temps et de l&apos;énergie à nos missions. Vous êtes un·e expert·e de l&apos;hygiène ? Vous voulez opérer 
                le module ? Nous aider à rendre le module autonome ? Ou soutenir nos activités de plaidoyer ? 
                <strong>👉 Contactez-nous !</strong>
              </p>

              <div className="volunteer-areas">
                <h3>Nous cherchons toujours des bénévoles pour nous aider :</h3>
                <div className="areas-grid">
                  <div className="area-item">
                    <span className="area-icon">⚙️</span>
                    <span>Ingénierie</span>
                  </div>
                  <div className="area-item">
                    <span className="area-icon">🚚</span>
                    <span>Opérations</span>
                  </div>
                  <div className="area-item">
                    <span className="area-icon">🔬</span>
                    <span>Recherche & développement</span>
                  </div>
                  <div className="area-item">
                    <span className="area-icon">📢</span>
                    <span>Communication</span>
                  </div>
                  <div className="area-item">
                    <span className="area-icon">🤝</span>
                    <span>Expertise humanitaire</span>
                  </div>
                  <div className="area-item">
                    <span className="area-icon">💰</span>
                    <span>Financement & partenariats</span>
                  </div>
                  <div className="area-item">
                    <span className="area-icon">🎨</span>
                    <span>Design</span>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <Link href="/#contact" className="btn btn--primary">NOUS CONTACTER</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Autres Façons d'Aider Section */}
        <section className="help-ways-section">
          <div className="container">
            <h2>Vous pouvez aussi nous aider en donnant :</h2>
            <div className="help-ways-grid">
              <div className="help-way">
                <div className="help-icon">💳</div>
                <h3>Contribution financière</h3>
              </div>
              <div className="help-way">
                <div className="help-icon">📦</div>
                <h3>Conteneur maritime</h3>
              </div>
              <div className="help-way">
                <div className="help-icon">🚿</div>
                <h3>Équipement sanitaire</h3>
              </div>
              <div className="help-way">
                <div className="help-icon">🔥</div>
                <h3>Chauffe-eau</h3>
              </div>
              <div className="help-way">
                <div className="help-icon">🧠</div>
                <h3>Expertise</h3>
              </div>
            </div>

            <div className="help-contact">
              <Link href="/#contact" className="btn btn--secondary">NOUS CONTACTER</Link>
            </div>
          </div>
        </section>

        {/* Contact Direct Section */}
        <section className="contact-direct-section">
          <div className="container">
            <div className="contact-content">
              <h2>Contactez-nous</h2>
              <div className="contact-info">
                <p className="contact-email">
                  <strong>Email :</strong> 
                  <a href="mailto:info@bubbleboxproject.org">info@bubbleboxproject.org</a>
                </p>
                <p className="contact-note">
                  N&apos;hésitez pas à nous écrire pour discuter de vos idées et de la façon dont vous pouvez contribuer à notre mission.
                </p>
              </div>
              <div className="contact-actions">
                <Link href="/#contact" className="btn btn--primary">FORMULAIRE DE CONTACT</Link>
                <Link href="/#don" className="btn btn--ghost">FAIRE UN DON</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
