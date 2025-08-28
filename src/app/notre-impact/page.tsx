'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function NotreImpactPage() {
  useAnimations();

  return (
    <div className="notre-impact-page">
      <Header />
      
      <main>
        <section className="hero-impact">
          <div className="container">
            <h1>Notre Impact</h1>
            <p className="lead">
              Des résultats concrets et mesurables pour l&apos;accès à l&apos;hygiène
            </p>
          </div>
        </section>

        <section className="impact-achievements">
          <div className="container">
            <h2>Nos réalisations</h2>
            <div className="achievements-content">
              <p>
                Après des années de développement, nous avons construit notre premier 
                module avec une petite entreprise basée à Polliat (Ain). Le premier 
                module BubbleBox a été inauguré à Bordeaux en juillet 2021, en 
                partenariat avec la Ville et la Croix-Rouge Française.
              </p>
            </div>
          </div>
        </section>

        <section className="impact-stats">
          <div className="container">
            <h2>Chiffres-clés</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1200+</div>
                <div className="stat-label">douches gratuites</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">Des milliers</div>
                <div className="stat-label">d&apos;heures d&apos;accueil</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">partenaires d&apos;opération</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">Des douzaines</div>
                <div className="stat-label">de kg de produits d&apos;hygiène distribués</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">Un nombre incalculable</div>
                <div className="stat-label">de moments humains</div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-triple">
          <div className="container">
            <h2>Impact triple</h2>
            <div className="triple-content">
              <p>
                BubbleBox a un triple impact positif. En offrant un accès gratuit 
                à l&apos;hygiène à celles et ceux qui en ont le plus besoin, nous 
                contribuons à améliorer :
              </p>
              
              <div className="impact-areas">
                <div className="impact-area">
                  <h3>Le bien-être des bénéficiaires</h3>
                  <p>Amélioration de la confiance en soi et de la dignité</p>
                </div>
                
                <div className="impact-area">
                  <h3>Leur santé individuelle</h3>
                  <p>Réduction des risques d&apos;infections et de maladies</p>
                </div>
                
                <div className="impact-area">
                  <h3>La santé publique</h3>
                  <p>Contribution à la prévention sanitaire collective</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-collaboration">
          <div className="container">
            <h2>Modèle d&apos;opération collaboratif</h2>
            <div className="collaboration-content">
              <p>
                Notre modèle d&apos;opération collaboratif encourage également la mise 
                en place de nouvelles coopérations entre associations, services publics 
                et communautés locales, ce qui inclus même nos bénéficiaires !
              </p>
              
              <div className="partners-info">
                <h3>BubbleBox est opéré en collaboration avec :</h3>
                <p>[caroussel avec les assos partenaires : les Gratuits, Un Espoir Solidaire, éventuellement CRF]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-details">
          <div className="container">
            <h2>Découvrez nos impacts et nos projets dans le détail</h2>
            <div className="details-content">
              <p>[Liens vers les rapports d&apos;activités]</p>
            </div>
          </div>
        </section>

        <section className="impact-stories">
          <div className="container">
            <h2>Histoires d&apos;impact</h2>
            <div className="stories-content">
              <div className="story-item">
                <h3>Marie, bénéficiaire à Bordeaux</h3>
                <p>
                  &quot;Grâce à BubbleBox, j&apos;ai pu retrouver ma dignité. 
                  Une douche chaude, c&apos;est plus qu&apos;un moment d&apos;hygiène, 
                  c&apos;est un moment pour soi.&quot;
                </p>
              </div>
              
              <div className="story-item">
                <h3>L&apos;équipe de la Croix-Rouge</h3>
                <p>
                  &quot;BubbleBox nous permet d&apos;aller au-delà de nos missions 
                  traditionnelles. C&apos;est un outil formidable pour créer du lien 
                  avec les personnes en difficulté.&quot;
                </p>
              </div>
              
              <div className="story-item">
                <h3>La Ville de Bordeaux</h3>
                <p>
                  &quot;Ce partenariat illustre parfaitement notre approche de 
                  l&apos;innovation sociale. BubbleBox répond à un vrai besoin 
                  de notre territoire.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-future">
          <div className="container">
            <h2>Notre vision pour l&apos;avenir</h2>
            <div className="future-content">
              <p>
                Nous continuons à développer et déployer de nouveaux modules pour 
                étendre notre impact. Notre objectif est de créer un réseau de 
                solutions d&apos;hygiène mobiles qui couvre les besoins non satisfaits 
                sur l&apos;ensemble du territoire français.
              </p>
              <p>
                Chaque nouveau déploiement nous permet d&apos;améliorer nos solutions 
                et de créer de nouvelles synergies avec les acteurs locaux.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
