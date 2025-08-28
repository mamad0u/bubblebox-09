'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import { useAnimations } from '../../hooks/useAnimations';

export default function About() {
  useAnimations();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <h1>C'est quoi BubbleBox ?</h1>
              <p className="hero-subtitle">
                Une association reconnue d'intérêt général basée à Paris, dédiée à l'amélioration de l'accès à l'hygiène pour tous.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-about-section">
          <div className="container">
            <div className="mission-content">
              <h2>Notre Mission</h2>
              <p>
                Notre mission est d'améliorer l'accès à l'hygiène des personnes sans-abri, mal-logées, migrantes et réfugiées. 
                Nous concevons, construisons et déployons des modules humanitaires durables.
              </p>
            </div>
          </div>
        </section>

        {/* Histoire Section */}
        <section className="histoire-section">
          <div className="container">
            <h2>Notre Histoire</h2>
            <div className="histoire-content">
              <div className="histoire-text">
                <p>
                  En juillet 2017, plus de 2771 êtres humains vivant dans le campement informel autour du centre d'accueil 
                  humanitaire de la Porte de la Chapelle, à Paris, partageaient, comme seul accès à l'eau, 4 robinets.
                </p>
                <p>
                  Témoins des conséquences du manque d'accès à l'hygiène, une équipe d'étudiants internationaux participant 
                  à un programme d'innovation sociale organisé par Harvard, SciencesPo et le Centre de Recherche Interdisciplinaire 
                  (désormais Learning Planet Institute) décidèrent de s'emparer ensemble de ce problème.
                </p>
                <p>
                  Nous sommes allés à la rencontre de demandeurs d'asyle, d'ONG et des collectivités locales pour imaginer 
                  des solutions collaboratives et durables afin de garantir un accès de base à l'hygiène pour tous et partout. 
                  Afin de répondre aux besoins de nos bénéficiaires et aux contraintes de chaque partie prenante, nous nous 
                  sommes inspirés d'initiatives et d'infrastructures urbaines existantes (bains publics, Mobil'Douche...) et 
                  avons proposé un module de douches mobile pensé pour "aller vers" ceux qui en ont le plus besoin, s'adaptant 
                  à différentes situation de crises tout en respectant les humains et l'environnement : <strong>BubbleBox était né !</strong>
                </p>
              </div>
              
              <div className="histoire-highlight">
                <div className="highlight-content">
                  <p>
                    "Depuis juillet 2021, nous opérons à Bordeaux notre premier module de douches mobile, en partenariat 
                    avec la Ville de Bordeaux et plusieurs associations locales. Il accueille gratuitement chaque semaine 
                    des dizaines de personnes en situation de précarité et/ou d'exclusion sociale pour une douche chaude 
                    et un moment de convivialité avec des bénévoles et de travailleuses et travailleurs sociaux."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Construire pour l'Avenir Section */}
        <section className="future-section">
          <div className="container">
            <h2>Construire pour l'Avenir</h2>
            <div className="future-content">
              <div className="future-stats">
                <div className="stat-item">
                  <h3>2+ milliards</h3>
                  <p>de personnes n'ont pas accès à des infrastructures d'hygiène de base</p>
                </div>
                <div className="stat-item">
                  <h3>17</h3>
                  <p>Objectifs de Développement Durable (ODD) adoptés par l'ONU en 2015</p>
                </div>
              </div>
              
              <div className="future-text">
                <p>
                  D'après l'ONU, plus de 2 milliards de personnes n'ont pas accès à des infrastructures d'hygiène de base. 
                  Ce manque d'accès expose les êtres humains à un "risque majeur de maladies infections et la mortalité", 
                  comme par exemple, à des maladies intestinales, des infections cutanées (gale) et respiratoires. 
                  Ce problème contribue également à renforcer les inégalités sociales et impacte fortement la santé mentale 
                  des personnes concernées.
                </p>
                
                <blockquote className="quote-highlight">
                  <p>"La promotion de l'hygiène est l'intervention la plus efficace en matière de santé"</p>
                  <cite>Rapport de la Banque Mondiale sur les Priorités pour le Contrôle des Maladies</cite>
                </blockquote>
                
                <p>
                  En 2015, l'Assemblée Générale des Nations Unies a adopté les Objectifs de Développement Durable (ODD) : 
                  17 objectifs interconnectés conçus comme une feuille de route pour "parvenir à un avenir meilleur et plus 
                  durable pour tous" d'ici 2030.
                </p>
                
                <p>
                  L'accès à l'hygiène est l'un des piliers de l'ODD 3 (Bonne Santé et Bien-Être) et 6 (Eau Propre et Assainissement). 
                  Nos modules d'hygiène proposent une solution accessible et adaptable au service de la santé, du bien-être 
                  et de la dignité de celles et ceux qui en ont le plus besoin.
                </p>
                
                <p>
                  <strong>BubbleBox est conçu pour apporter un accès à l'hygiène décent partout, pour toutes et tous.</strong> 
                  Nos missions soutiennent les tissus de solidarité locaux et les associations existantes pour renforcer 
                  la santé publique et celle de chacun·e de nos bénéficiaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaires Section */}
        <section className="partners-about-section">
          <div className="container">
            <h2>Nos Partenaires</h2>
            <p className="partners-intro">
              Notre engagement pour un meilleur accès à l'hygiène est possible grâce à nos partenaires :
            </p>
            
            <div className="partners-carousel">
              <div className="partner-item">
                <div className="partner-logo-placeholder">
                  <span>Fondation Veolia</span>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-logo-placeholder">
                  <span>21 CRF</span>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-logo-placeholder">
                  <span>Logo Talents 2024</span>
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-logo-placeholder">
                  <span>Ville de Bordeaux</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-about-section">
          <div className="container">
            <div className="cta-content">
              <h2>Rejoignez Notre Mission</h2>
              <p>Ensemble, construisons un avenir où l'hygiène est accessible à tous.</p>
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
