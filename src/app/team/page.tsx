'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function TeamPage() {
  useAnimations();

  return (
    <div className="team-page">
      <Header />
      
      <main>
        <section className="hero-team">
          <div className="container">
            <h1>Notre équipe</h1>
            <p className="lead">
              Une équipe passionnée et engagée pour l&apos;accès à l&apos;hygiène pour tous
            </p>
          </div>
        </section>

        <section className="team-members">
          <div className="container">
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo-placeholder">
                  <span>Photo</span>
                </div>
                <div className="member-info">
                  <h3>Anthony Crepin</h3>
                  <p className="member-role">Président, Chef de projet en génie climatique et membre des ERU de la Croix-Rouge</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo-placeholder">
                  <span>Photo</span>
                </div>
                <div className="member-info">
                  <h3>Pierre Noro</h3>
                  <p className="member-role">Co-fondateur, Secrétaire Général, expert en innovation sociale et en éthique des nouvelles technologies</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo-placeholder">
                  <span>Photo</span>
                </div>
                <div className="member-info">
                  <h3>Amine Kasbaoui</h3>
                  <p className="member-role">Trésorier, contrôleur de gestion dans le milieu hospitalier</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo-placeholder">
                  <span>Photo</span>
                </div>
                <div className="member-info">
                  <h3>Maxime Noro</h3>
                  <p className="member-role">Tech Lead, Ingénieur d&apos;études en génie mécanique qui s&apos;active pour un monde meilleur</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo-placeholder">
                  <span>Photo</span>
                </div>
                <div className="member-info">
                  <h3>Elliott Veyssiere</h3>
                  <p className="member-role">Responsable Com, Apprenti ingénieur ?</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo-placeholder">
                  <span>Photo</span>
                </div>
                <div className="member-info">
                  <h3>Juno Lee</h3>
                  <p className="member-role">Graphiste et illustratrice passionnée par les histoires qui inspirent les gens</p>
                </div>
              </div>

              <div className="team-member">
                <div className="member-photo-placeholder">
                  <span>Photo</span>
                </div>
                <div className="member-info">
                  <h3>Gözde Onaran</h3>
                  <p className="member-role">Graphiste qui met ses talents au service de l&apos;humanitaire</p>
                </div>
              </div>
            </div>

            <div className="team-acknowledgment">
              <p>Et toutes celles et ceux qui nous ont aidé en chemin: Christina, Anna, Alain, Rob...</p>
            </div>
          </div>
        </section>

        <section className="join-team">
          <div className="container">
            <h2>Rejoignez l&apos;équipe !</h2>
            <div className="join-content">
              <p>
                BubbleBox est un projet humanitaire en pleine évolution. Notre équipe accueille 
                toutes celles et ceux qui veulent contribuer du temps et de l&apos;énergie à nos missions.
              </p>
              
              <div className="join-questions">
                <p>Vous êtes un·e expert·e de l&apos;hygiène ?</p>
                <p>Vous voulez opérer le module ?</p>
                <p>Nous aider à rendre le module autonome ?</p>
                <p>Ou soutenir nos activités de plaidoyer ?</p>
              </div>

              <div className="join-cta">
                <p>👉 Contactez-nous!</p>
              </div>

              <div className="volunteer-areas">
                <h3>Nous cherchons toujours des bénévoles pour nous aider :</h3>
                <ul>
                  <li>Ingénierie</li>
                  <li>Opérations</li>
                  <li>Recherche & développement</li>
                  <li>Communication</li>
                  <li>Expertise humanitaire</li>
                  <li>Financement & partenariats</li>
                  <li>Design</li>
                </ul>
                <p>Contactez-nous</p>
              </div>

              <div className="donation-options">
                <h3>Vous pouvez aussi nous aider en donnant :</h3>
                <ul>
                  <li>Contribution financière</li>
                  <li>Conteneur maritime</li>
                  <li>Équipement sanitaire</li>
                  <li>Chauffe-eau</li>
                  <li>Expertise</li>
                </ul>
                <p>Contactez-nous</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
