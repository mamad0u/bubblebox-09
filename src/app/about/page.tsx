'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
              <h1>C&apos;est quoi BubbleBox ?</h1>
              <p className="hero-subtitle">
                Une association reconnue d&apos;intérêt général basée à Paris, dédiée à l&apos;amélioration de l&apos;accès à l&apos;hygiène pour tous... et le petit surnom donné à nos modules !
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
                Notre mission est d&apos;améliorer l&apos;accès à l&apos;hygiène des personnes sans-abri, mal-logées, migrantes et réfugiées. 
                Nous concevons, construisons et déployons des modules humanitaires durables, en collaboration avec des acteurs locaux de la solidarité.
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
                  En juillet 2017, plus de 2771 êtres humains vivant dans le campement informel autour du centre d&apos;accueil 
                  humanitaire de la Porte de la Chapelle, à Paris, partageaient, comme seuls points d&apos;accès à l&apos;eau, 4 robinets.
                </p>
                <p>
                  Témoins des conséquences du manque d&apos;accès à l&apos;hygiène, une équipe d&apos;étudiants internationaux participant 
                  à un programme d&apos;innovation sociale organisé par Harvard, SciencesPo et le Centre de Recherche Interdisciplinaire 
                  (désormais Learning Planet Institute) décidèrent de s&apos;emparer ensemble de ce problème.
                </p>
                <p>
                  Nous sommes allés à la rencontre de demandeurs d&apos;asile, d&apos;ONG et des collectivités locales pour imaginer 
                  des solutions collaboratives et durables afin de garantir un accès de base à l&apos;hygiène pour tous et partout. 
                  Afin de répondre aux besoins de nos bénéficiaires et aux contraintes de chaque partie prenante, nous nous 
                  sommes inspirés d&apos;initiatives et d&apos;infrastructures urbaines existantes (bains publics, Mobil&apos;Douche...) et 
                  avons proposé un module de douches mobile pensé pour &quot;aller vers&quot; celles et ceux qui en ont le plus besoin, s&apos;adaptant 
                  à différentes situation de crises tout en respectant les humains et l&apos;environnement : <strong>BubbleBox était né !</strong>
                </p>
              </div>
              
              <div className="histoire-highlight">
                <div className="highlight-content">
                  <p>
                  Depuis juillet 2021, nous opérons à Bordeaux notre premier module de douches mobile, en partenariat 
                    avec la Ville de Bordeaux et plusieurs associations locales. Il accueille gratuitement chaque semaine 
                    des dizaines de personnes en situation de précarité et/ou d&apos;exclusion sociale pour une douche chaude 
                    et un moment de convivialité avec des bénévoles et de travailleuses et travailleurs sociaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Construire pour l'Avenir Section */}
        <section className="future-section">
          <div className="container">
            <h2>Construire pour l&apos;Avenir</h2>
            <div className="future-content">
              <div className="future-stats">
                <div className="stat-item">
                  <h3>2+ milliards</h3>
                  <p>de personnes n&apos;ont pas accès à des infrastructures d&apos;hygiène de base</p>
                  <p>
                    D&apos;après l&apos;ONU, plus de 2 milliards de personnes n&apos;ont pas accès à des infrastructures d&apos;hygiène de base. 
                    Ce manque d&apos;accès expose les êtres humains à un &quot;risque majeur de maladies infections et la mortalité&quot;, 
                    comme par exemple, à des maladies intestinales, des infections cutanées (gale) et respiratoires. 
                    Ce problème contribue également à renforcer les inégalités sociales et impacte fortement la santé mentale 
                    des personnes concernées.
                  </p>
                </div>
                <div className="stat-item">
                  <h3>17</h3>
                  <p>Objectifs de Développement Durable (ODD) adoptés par l&apos;ONU en 2015</p>
                  <p>
                    En 2015, l&apos;Assemblée Générale des Nations Unies a adopté les Objectifs de Développement Durable (ODD) : 
                    17 objectifs interconnectés conçus comme une feuille de route pour &quot;parvenir à un avenir meilleur et plus 
                    durable pour tous&quot; d&apos;ici 2030.
                  </p>
                </div>
              </div>
              
              <div className="future-text">
                <blockquote className="quote-highlight">
                  <p>&quot;La promotion de l&apos;hygiène est l&apos;intervention la plus efficace en matière de santé&quot;</p>
                  <cite>Rapport de la Banque Mondiale sur les Priorités pour le Contrôle des Maladies</cite>
                </blockquote>
                
                <p>
                  L&apos;accès à l&apos;hygiène est l&apos;un des piliers de l&apos;ODD 3 (Bonne Santé et Bien-Être) et 6 (Eau Propre et Assainissement). 
                  Nos modules d&apos;hygiène proposent une solution accessible et adaptable au service de la santé, du bien-être 
                  et de la dignité de celles et ceux qui en ont le plus besoin.
                </p>
                
                <p>
                  <strong>BubbleBox est conçu pour apporter un accès à l&apos;hygiène décent partout, pour toutes et tous.</strong> 
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
              Notre engagement pour un meilleur accès à l&apos;hygiène est possible grâce à nos partenaires :
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
              <p>Ensemble, construisons un avenir où l&apos;hygiène est accessible à tous.</p>
              <div className="cta-actions">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Don" className="btn btn--primary" target="_blank" rel="noopener noreferrer">FAIRE UN DON</Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bubbleboxproject.org&su=Contact" className="btn btn--ghost" target="_blank" rel="noopener noreferrer">NOUS CONTACTER</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
