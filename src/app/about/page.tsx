'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '../../components/Logo';
import { useAnimations } from '../../hooks/useAnimations';

export default function AboutPage() {
  useAnimations();

  return (
    <div className="about-page">
      <Header />
      
      <main>
        <section className="hero-about">
          <div className="container">
            <h1>C&apos;est quoi BubbleBox ?</h1>
            <p className="lead">
              BubbleBox est une association reconnue d&apos;intérêt général basée à Paris. 
              Notre mission est d&apos;améliorer l&apos;accès à l&apos;hygiène des personnes 
              sans-abri, mal-logées, migrantes et réfugiées. Nous concevons, construisons 
              et déployons des modules humanitaires durables.
            </p>
          </div>
        </section>

        <section className="histoire">
          <div className="container">
            <h2>Notre histoire</h2>
            <div className="histoire-content">
              <div className="histoire-text">
                <p>
                  En juillet 2017, plus de 2771 êtres humains vivant dans le campement 
                  informel autour du centre d&apos;accueil humanitaire de la Porte de la 
                  Chapelle, à Paris, partageaient, comme seul accès à l&apos;eau, 4 robinets.
                </p>
                <p>
                  Témoins des conséquences du manque d&apos;accès à l&apos;hygiène, une 
                  équipe d&apos;étudiants internationaux participant à un programme 
                  d&apos;innovation sociale organisé par Harvard, SciencesPo et le Centre 
                  de Recherche Interdisciplinaire (désormais Learning Planet Institute) 
                  décidèrent de s&apos;emparer ensemble de ce problème.
                </p>
                <p>
                  Nous sommes allés à la rencontre de demandeurs d&apos;asyle, d&apos;ONG 
                  et des collectivités locales pour imaginer des solutions collaboratives 
                  et durables afin de garantir un accès de base à l&apos;hygiène pour tous 
                  et partout.
                </p>
                <p>
                  Afin de répondre aux besoins de nos bénéficiaires et aux contraintes de 
                  chaque partie prenante, nous nous sommes inspirés d&apos;initiatives et 
                  d&apos;infrastructures urbaines existantes (bains publics, Mobil&apos;Douche...) 
                  et avons proposé un module de douches mobile pensé pour &quot;aller vers&quot; 
                  ceux qui en ont le plus besoin, s&apos;adaptant à différentes situation 
                  de crises tout en respectant les humains et l&apos;environnement : 
                  BubbleBox était né !
                </p>
                <blockquote>
                  &quot;Depuis juillet 2021, nous opérons à Bordeaux notre premier module 
                  de douches mobile, en partenariat avec la Ville de Bordeaux et plusieurs 
                  associations locales. Il accueille gratuitement chaque semaine des dizaines 
                  de personnes en situation de précarité et/ou d&apos;exclusion sociale 
                  pour une douche chaude et un moment de convivialité avec des bénévoles 
                  et de travailleuses et travailleurs sociaux.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="avenir">
          <div className="container">
            <h2>Construire pour l&apos;Avenir</h2>
            <div className="avenir-content">
              <div className="avenir-text">
                <p>
                  D&apos;après l&apos;ONU, plus de 2 milliards de personnes n&apos;ont pas 
                  accès à des infrastructures d&apos;hygiène de base. Ce manque d&apos;accès 
                  expose les êtres humains à un &quot;risque majeur de maladies infections 
                  et la mortalité&quot;, comme par exemple, à des maladies intestinales, 
                  des infections cutanées (gale) et respiratoires.
                </p>
                <p>
                  Ce problème contribue également à renforcer les inégalités sociales et 
                  impacte fortement la santé mentale des personnes concernées.
                </p>
                <blockquote>
                  &quot;La promotion de l&apos;hygiene est l&apos;intervention la plus 
                  efficace en matière de santé&quot; (Rapport de la Banque Mondiale sur 
                  les Priorités pour le Contrôle des Maladies)
                </blockquote>
                <p>
                  En 2015, l&apos;Assemblée Générale des Nations Unies a adopté les 
                  Objectifs de Développement Durable (ODD) 17 objectifs interconnectés 
                  conçus comme une feuille de route pour &quot;parvenir à un avenir meilleur 
                  et plus durable pour tous&quot; d&apos;ici 2030.
                </p>
                <p>
                  L&apos;accès à l&apos;hygiène est l&apos;un des piliers de l&apos;ODD 3 
                  (Bonne Santé et Bien-Être) et 6 (Eau Propre et Assainissement).
                </p>
                <p>
                  Nos modules d&apos;hygiène proposent une solution accessible et adaptable 
                  au service de la santé, du bien-être et de la dignité de celles et ceux 
                  qui en ont le plus besoin.
                </p>
                <p>
                  BubbleBox est conçu pour apporter un accès à l&apos;hygiène décent partout, 
                  pour toutes et tous. Nos missions soutiennent les tissus de solidarité 
                  locaux et les associations existantes pour renforcer la santé publique 
                  et celle de chacun·e de nos bénéficiaires.
                </p>
                <p>
                  Notre engagement pour un meilleur accès à l&apos;hygiène est possible 
                  grâce à nos partenaires : [caroussel avec : Fondation Veolia, 21 CRF, 
                  logo talents 2024, logo ville de Bordeaux...]
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
