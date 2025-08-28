'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAnimations } from '@/hooks/useAnimations';

export default function DesignUtilisateurPage() {
  useAnimations();

  return (
    <div className="design-utilisateur-page">
      <Header />
      
      <main>
        <section className="hero-design">
          <div className="container">
            <h1>Design centré sur l&apos;utilisateur</h1>
            <p className="lead">
              Une approche collaborative et inclusive pour concevoir des solutions qui répondent aux vrais besoins
            </p>
          </div>
        </section>

        <section className="design-principles">
          <div className="container">
            <h2>Nos principes de conception</h2>
            <div className="principles-grid">
              <div className="principle-item">
                <div className="principle-icon">🎯</div>
                <h3>Écoute active</h3>
                <p>
                  Nous allons à la rencontre de nos bénéficiaires pour comprendre leurs 
                  besoins réels et leurs contraintes quotidiennes. Chaque décision de 
                  conception est basée sur leurs retours et leurs expériences.
                </p>
              </div>
              
              <div className="principle-item">
                <div className="principle-icon">🤝</div>
                <h3>Co-création</h3>
                <p>
                  Nos modules sont développés en collaboration avec les associations 
                  locales, les collectivités et les communautés. Cette approche 
                  participative garantit que nos solutions s&apos;adaptent parfaitement 
                  à chaque contexte local.
                </p>
              </div>
              
              <div className="principle-item">
                <div className="principle-icon">🔄</div>
                <h3>Amélioration continue</h3>
                <p>
                  Nous collectons constamment les retours d&apos;expérience et 
                  ajustons nos modules en conséquence. L&apos;innovation est un 
                  processus itératif guidé par l&apos;usage réel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="design-process">
          <div className="container">
            <h2>Notre processus de conception</h2>
            <div className="process-content">
              <div className="process-step">
                <h3>1. Observation et immersion</h3>
                <p>
                  Nous passons du temps sur le terrain pour observer les conditions 
                  de vie et les défis quotidiens de nos bénéficiaires. Cette immersion 
                  nous permet de comprendre les besoins non exprimés.
                </p>
              </div>
              
              <div className="process-step">
                <h3>2. Co-design avec les parties prenantes</h3>
                <p>
                  Nous organisons des ateliers de conception avec les bénéficiaires, 
                  les associations locales et les experts pour co-créer des solutions 
                  adaptées. Chaque voix compte dans ce processus.
                </p>
              </div>
              
              <div className="process-step">
                <h3>3. Prototypage et test</h3>
                <p>
                  Nous développons des prototypes que nous testons directement avec 
                  les utilisateurs finaux. Ces tests nous permettent d&apos;identifier 
                  les améliorations nécessaires avant la production.
                </p>
              </div>
              
              <div className="process-step">
                <h3>4. Déploiement et suivi</h3>
                <p>
                  Une fois déployé, nous continuons à collecter les retours et à 
                  améliorer nos modules. L&apos;innovation ne s&apos;arrête jamais.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="design-values">
          <div className="container">
            <h2>Nos valeurs de conception</h2>
            <div className="values-content">
              <div className="value-item">
                <h3>Inclusivité</h3>
                <p>
                  Nous concevons pour tous, en tenant compte des différentes capacités, 
                  cultures et situations. Nos modules sont accessibles à toutes et tous, 
                  sans discrimination.
                </p>
              </div>
              
              <div className="value-item">
                <h3>Dignité</h3>
                <p>
                  Chaque personne mérite un accès digne à l&apos;hygiène. Nos modules 
                  sont conçus pour préserver l&apos;intimité et le respect de soi, 
                  même dans des conditions difficiles.
                </p>
              </div>
              
              <div className="value-item">
                <h3>Durabilité</h3>
                <p>
                  Nous pensons à long terme. Nos solutions sont conçues pour durer 
                  et s&apos;adapter aux évolutions des besoins et des technologies.
                </p>
              </div>
              
              <div className="value-item">
                <h3>Impact</h3>
                <p>
                  Chaque décision de conception est évaluée selon son impact potentiel 
                  sur la vie des bénéficiaires. Nous privilégions les solutions qui 
                  créent le plus de valeur sociale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="design-collaboration">
          <div className="container">
            <h2>Collaboration et partenariats</h2>
            <div className="collaboration-content">
              <p>
                Notre approche de design centré sur l&apos;utilisateur ne serait pas 
                possible sans la collaboration étroite avec nos partenaires locaux. 
                Nous travaillons main dans la main avec :
              </p>
              
              <ul>
                <li>Les associations locales qui connaissent le terrain</li>
                <li>Les collectivités qui comprennent les enjeux territoriaux</li>
                <li>Les experts techniques qui apportent leurs compétences</li>
                <li>Les bénéficiaires qui sont les experts de leurs propres besoins</li>
              </ul>
              
              <p>
                Cette approche collaborative nous permet de créer des solutions qui 
                s&apos;intègrent naturellement dans l&apos;écosystème local et qui 
                répondent aux vrais besoins des communautés.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
