'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function CollaborationPage() {
  useAnimations();

  return (
    <div className="collaboration-page">
      <Header />
      
      <main>
        <section className="hero-collaboration">
          <div className="container">
            <h1>Collaboration</h1>
            <p className="lead">
              Mettre l&apos;hygiène en commun pour créer un impact durable
            </p>
          </div>
        </section>

        <section className="collaboration-model">
          <div className="container">
            <h2>Notre modèle de collaboration</h2>
            <div className="model-content">
              <p>
                Afin de garantir un accueil inclusif, chaleureux et rassurant aux 
                personnes vulnérables, nous mettons nos forces au service du collectif. 
                Les modules BubbleBox sont des &quot;communs humanitaires&quot; développés, 
                déployés et opérés avec les associations, les collectivités et les 
                communautés locales pour renforcer le tissu de solidarité existant, 
                s&apos;adapter à chaque contexte et maximiser notre impact.
              </p>
              <p>
                Nous sommes convaincus que l&apos;accès décent à l&apos;hygiène que 
                nous offrons est un socle pour entretenir le bien-être et la santé de 
                toutes et tous. Nous donnons à nos bénéficiaires les ressources pour 
                prendre soin d&apos;elles et d&apos;eux-même.
              </p>
            </div>
          </div>
        </section>

        <section className="collaboration-benefits">
          <div className="container">
            <h2>Les bénéfices de la collaboration</h2>
            <div className="benefits-content">
              <div className="benefit-item">
                <h3>Renforcement des liens sociaux</h3>
                <p>
                  En respectant leur dignité et en nourrissant leur confiance, 
                  BubbleBox contribue à la création et à la culture de liens sociaux 
                  avec les communautés locales pour les personnes marginalisées.
                </p>
              </div>
              
              <div className="benefit-item">
                <h3>Relations saines et positives</h3>
                <p>
                  En collaborant avec des associations et collectivités territoriales, 
                  nous soutenons des relations saines et positives entre nos bénéficiaires 
                  et les communautés locales.
                </p>
              </div>
              
              <div className="benefit-item">
                <h3>Renforcement du tissu de solidarité</h3>
                <p>
                  Notre modèle fondé sur les communs rapproche les acteurs de la solidarité 
                  et les publics-cibles, leur permettant de se rencontrer, d&apos;entamer 
                  de nouvelles collaborations pour répondre aux besoins existants et 
                  d&apos;améliorer la santé publique dans son ensemble.
                </p>
              </div>
              
              <div className="benefit-item">
                <h3>Cercle vertueux</h3>
                <p>
                  Certains de nos bénéficiaires deviennent même bénévoles, renforçant 
                  ce cercle vertueux !
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="collaboration-network">
          <div className="container">
            <h2>Notre réseau de partenaires</h2>
            <div className="network-layout">
              <div className="network-center">
                <h3>BubbleBox</h3>
                <p>Centre de coordination et d&apos;innovation</p>
              </div>
              
              <div className="network-nodes">
                <div className="network-node">
                  <h4>Associations locales</h4>
                  <p>Expertise terrain et accompagnement des bénéficiaires</p>
                </div>
                
                <div className="network-node">
                  <h4>Collectivités</h4>
                  <p>Support logistique et coordination territoriale</p>
                </div>
                
                <div className="network-node">
                  <h4>Experts techniques</h4>
                  <p>Innovation et amélioration continue des modules</p>
                </div>
                
                <div className="network-node">
                  <h4>Communautés</h4>
                  <p>Accueil et intégration des bénéficiaires</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="collaboration-principles">
          <div className="container">
            <h2>Principes de collaboration</h2>
            <div className="principles-content">
              <div className="principle-item">
                <h3>Réciprocité</h3>
                <p>
                  Chaque partenaire apporte ses compétences et reçoit en retour 
                  des bénéfices mutuels. La collaboration est basée sur l&apos;échange 
                  équitable et le respect des contributions de chacun.
                </p>
              </div>
              
              <div className="principle-item">
                <h3>Transparence</h3>
                <p>
                  Nous partageons ouvertement nos objectifs, nos méthodes et nos 
                  résultats avec tous nos partenaires. La confiance est la base 
                  de nos collaborations.
                </p>
              </div>
              
              <div className="principle-item">
                <h3>Adaptabilité</h3>
                <p>
                  Chaque contexte local est unique. Nous adaptons nos approches 
                  et nos solutions en fonction des spécificités de chaque territoire 
                  et de chaque communauté.
                </p>
              </div>
              
              <div className="principle-item">
                <h3>Durabilité</h3>
                <p>
                  Nous construisons des partenariats durables qui survivent aux 
                  changements de contexte et qui créent un impact à long terme 
                  sur les communautés.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="collaboration-impact">
          <div className="container">
            <h2>Impact de nos collaborations</h2>
            <div className="impact-content">
              <p>
                Grâce à notre modèle de collaboration, nous avons réussi à créer 
                un écosystème d&apos;acteurs engagés pour l&apos;accès à l&apos;hygiène. 
                Nos partenariats ont permis de :
              </p>
              
              <ul>
                <li>Déployer des modules dans des zones difficiles d&apos;accès</li>
                <li>Former des équipes locales à l&apos;opération des modules</li>
                <li>Créer des synergies entre acteurs de la solidarité</li>
                <li>Amplifier l&apos;impact de chaque intervention</li>
                <li>Développer des solutions adaptées aux contextes locaux</li>
              </ul>
              
              <p>
                Cette approche collaborative nous permet de maximiser notre impact 
                tout en minimisant nos ressources, créant ainsi un modèle durable 
                et reproductible pour l&apos;accès à l&apos;hygiène.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
