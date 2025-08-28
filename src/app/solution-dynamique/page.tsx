'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function SolutionDynamiquePage() {
  useAnimations();

  return (
    <div className="solution-dynamique-page">
      <Header />
      
      <main>
        <section className="hero-solution-dynamique">
          <div className="container">
            <h1>Solution Dynamique</h1>
            <p className="lead">
              S&apos;adapter aux besoins et aux contextes pour maximiser notre impact
            </p>
          </div>
        </section>

        <section className="solution-adaptability">
          <div className="container">
            <h2>Adaptabilité et flexibilité</h2>
            <div className="adaptability-content">
              <p>
                Plutôt que d&apos;attendre que nos publics-cibles viennent à nous, 
                nos modules permettent d&apos;aller vers les populations privées 
                d&apos;accès décent à l&apos;hygiène. BubbleBox est conçu pour 
                s&apos;adapter à différents contextes et lieux de déploiements, 
                pour répondre aux besoins de plusieurs catégories de bénéficiaires 
                et même d&apos;être déployé en situation d&apos;urgence, par exemple 
                en réponse à des catastrophes naturelles.
              </p>
              <p>
                Notre module est équipé de 3 cabines de douches individuelles et 
                d&apos;un espace technique avec les chauffe-eau, le système de 
                filtration et des rangements pour stocker des produits d&apos;hygiène 
                à distribuer à nos bénéficiaires, une réserve de serviettes et un 
                lave-linge/sèche-linge pour les garder propres.
              </p>
            </div>
          </div>
        </section>

        <section className="solution-contexts">
          <div className="container">
            <h2>Contextes d&apos;utilisation variés</h2>
            <div className="contexts-content">
              <p>
                Le manque d&apos;accès à l&apos;hygiène touche des populations dans 
                des contextes variés : personnes sans-abris et mal-logées dans les 
                villes, campements informels en périphéries, camps de personnes 
                exilées dans les espaces ruraux...
              </p>
              <p>
                BubbleBox est inspiré par les infrastructures d&apos;hygiène publiques 
                du monde entier qui assurent ou ont assuré un accès minimal pour 
                toutes et tous. Nos modules sont conçus comme des &quot;mini-bains 
                publics sur roues&quot; pour apporter l&apos;hygiène partout, surtout 
                lorsque les solutions individuelles et temporaires sont sous-dimensionnées.
              </p>
            </div>
          </div>
        </section>

        <section className="solution-innovation">
          <div className="container">
            <h2>Innovation continue</h2>
            <div className="innovation-content">
              <p>
                Nous continuons de développer BubbleBox comme une solution efficace 
                et résiliente pour apporter un accès à l&apos;hygiène aux personnes 
                vulnérables en situation de crise afin d&apos;aider à protéger leur 
                santé et leur dignité.
              </p>
              <p>
                Notre approche itérative nous permet d&apos;améliorer constamment 
                nos modules en fonction des retours d&apos;expérience et des 
                évolutions technologiques.
              </p>
            </div>
          </div>
        </section>

        <section className="solution-features-dynamic">
          <div className="container">
            <h2>Caractéristiques dynamiques</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🚚</div>
                <h3>Mobilité totale</h3>
                <p>Déploiement rapide sur tous types de terrains</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>Autonomie énergétique</h3>
                <p>Fonctionnement indépendant grâce aux panneaux solaires</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">💧</div>
                <h3>Gestion intelligente de l&apos;eau</h3>
                <p>Systèmes de filtration et réutilisation</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <h3>Maintenance simplifiée</h3>
                <p>Conception modulaire pour faciliter les réparations</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <h3>Adaptation climatique</h3>
                <p>Fonctionnement dans des conditions extrêmes</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <h3>Monitoring à distance</h3>
                <p>Suivi en temps réel des performances</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-deployment">
          <div className="container">
            <h2>Processus de déploiement</h2>
            <div className="deployment-content">
              <div className="deployment-step">
                <h3>1. Évaluation du contexte</h3>
                <p>
                  Analyse des besoins locaux, des contraintes logistiques et des 
                  partenariats possibles pour optimiser l&apos;impact.
                </p>
              </div>
              
              <div className="deployment-step">
                <h3>2. Adaptation du module</h3>
                <p>
                  Configuration spécifique selon le contexte : équipements, 
                  capacités, et fonctionnalités adaptées aux besoins identifiés.
                </p>
              </div>
              
              <div className="deployment-step">
                <h3>3. Formation des équipes</h3>
                <p>
                  Formation des opérateurs locaux et des bénévoles pour assurer 
                  une gestion autonome et durable du module.
                </p>
              </div>
              
              <div className="deployment-step">
                <h3>4. Suivi et amélioration</h3>
                <p>
                  Collecte des retours d&apos;expérience et ajustements continus 
                  pour optimiser l&apos;efficacité et l&apos;impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-future">
          <div className="container">
            <h2>Perspectives d&apos;avenir</h2>
            <div className="future-content">
              <p>
                Notre vision est de développer une gamme complète de solutions 
                d&apos;hygiène mobiles adaptées à différents contextes et besoins. 
                Nous travaillons sur :
              </p>
              
              <ul>
                <li>Modules spécialisés pour les situations d&apos;urgence</li>
                <li>Solutions adaptées aux climats extrêmes</li>
                <li>Technologies de purification d&apos;eau avancées</li>
                <li>Intégration de l&apos;intelligence artificielle pour l&apos;optimisation</li>
                <li>Développement de partenariats internationaux</li>
              </ul>
              
              <p>
                Cette approche dynamique nous permet de rester à la pointe de 
                l&apos;innovation tout en répondant aux besoins réels des 
                communautés que nous servons.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
