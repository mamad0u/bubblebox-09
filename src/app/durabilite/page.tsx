'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function DurabilitePage() {
  useAnimations();

  return (
    <div className="durabilite-page">
      <Header />
      
      <main>
        <section className="hero-durabilite">
          <div className="container">
            <h1>Durabilité</h1>
            <p className="lead">
              Minimiser notre empreinte environnementale tout en maximisant notre impact social
            </p>
          </div>
        </section>

        <section className="durabilite-approach">
          <div className="container">
            <h2>Notre approche durable</h2>
            <div className="approach-content">
              <p>
                Pour diminuer notre empreinte environnementale et amplifier notre impact 
                social, nos modules sont fabriqués avec un maximum de matériaux de seconde 
                main et nous favorisons le recours aux entreprises d&apos;insertion pour 
                leur construction et leur maintenance.
              </p>
              <p>
                Nous collaborons avec des startups spécialisées dans l&apos;élaboration 
                de systèmes de filtration. En réutilisant une partie de l&apos;eau, nous 
                pouvons réduire la consommation de nos modules et permettre leur opération 
                sur des sites sans accès aux réseaux de distribution hydro-électrique.
              </p>
              <p>
                Grâce à la filtration, aux panneaux solaires et à du stockage d&apos;énergie, 
                nous avons pour ambition de construire des modules pouvant être opérés partout, 
                avec jusqu&apos;à 3 jours d&apos;autonomie.
              </p>
            </div>
          </div>
        </section>

        <section className="durabilite-produits">
          <div className="container">
            <h2>Produits d&apos;hygiène durables</h2>
            <div className="produits-content">
              <p>
                BubbleBox s&apos;engage à distribuer des produits d&apos;hygiène invendus 
                ou non-utilisés à ses bénéficiaires, tout en minimisant ses empreintes 
                environnementales de la fabrication à l&apos;opération des modules.
              </p>
              <p>
                Nous voulons faire de cette approche, combinant innovation sociale et 
                technologique de manière éco-responsable, un standard en matière de 
                solutions d&apos;hygiène mobiles et autonomes.
              </p>
            </div>
          </div>
        </section>

        <section className="durabilite-produits-cascade">
          <div className="container">
            <div className="cascade-layout">
              <div className="cascade-item cascade-item--main">
                <h3>Approche circulaire</h3>
                <p>
                  Nous privilégions les matériaux de seconde main et les équipements 
                  reconditionnés pour réduire notre impact environnemental tout en 
                  créant de la valeur sociale.
                </p>
                <div className="benefit-tags">
                  <span className="benefit-tag">Réduction des déchets</span>
                  <span className="benefit-tag">Économie circulaire</span>
                  <span className="benefit-tag">Impact social positif</span>
                </div>
              </div>
              
              <div className="cascade-item cascade-item--side">
                <h4>Matériaux recyclés</h4>
                <p>Conteneurs maritimes de seconde main</p>
              </div>
              
              <div className="cascade-item cascade-item--side">
                <h4>Équipements reconditionnés</h4>
                <p>Chauffe-eau et systèmes de filtration</p>
              </div>
              
              <div className="cascade-item cascade-item--side">
                <h4>Entreprises d&apos;insertion</h4>
                <p>Partnerships pour la construction</p>
              </div>
            </div>
          </div>
        </section>

        <section className="durabilite-innovation">
          <div className="container">
            <h2>Innovation technologique durable</h2>
            <div className="innovation-content">
              <div className="innovation-item">
                <h3>Système de filtration d&apos;eau</h3>
                <p>
                  Développement de technologies de réutilisation d&apos;eau pour réduire 
                  la consommation et permettre l&apos;opération en autonomie.
                </p>
              </div>
              
              <div className="innovation-item">
                <h3>Énergie renouvelable</h3>
                <p>
                  Intégration de panneaux solaires et de systèmes de stockage d&apos;énergie 
                  pour une autonomie complète jusqu&apos;à 3 jours.
                </p>
              </div>
              
              <div className="innovation-item">
                <h3>Monitoring intelligent</h3>
                <p>
                  Systèmes de suivi en temps réel pour optimiser la consommation et 
                  détecter les améliorations possibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="durabilite-impact">
          <div className="container">
            <h2>Impact environnemental et social</h2>
            <div className="impact-content">
              <div className="impact-metrics">
                <div className="metric">
                  <h3>Réduction des déchets</h3>
                  <p>Utilisation de matériaux de seconde main</p>
                </div>
                
                <div className="metric">
                  <h3>Économie d&apos;eau</h3>
                  <p>Systèmes de réutilisation et filtration</p>
                </div>
                
                <div className="metric">
                  <h3>Énergie verte</h3>
                  <p>Panneaux solaires et autonomie énergétique</p>
                </div>
                
                <div className="metric">
                  <h3>Insertion sociale</h3>
                  <p>Collaboration avec entreprises d&apos;insertion</p>
                </div>
              </div>
              
              <div className="impact-vision">
                <h3>Notre vision</h3>
                <p>
                  Créer un standard de durabilité pour les solutions d&apos;hygiène 
                  mobiles, combinant innovation technologique et impact social positif. 
                  Nous voulons démontrer qu&apos;il est possible de répondre aux besoins 
                  humanitaires tout en préservant notre planète.
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

