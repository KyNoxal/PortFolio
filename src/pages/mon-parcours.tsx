import Card from "./card";
import Header from "./header";
import BackButton from "./back-button";
import GRLogo from "/public/images/GRLogo.jpg";
import ApyclicLogo from "/public/images/ApyclicLogo.jpg";

export default function MonParcours() {
  return (
    <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
      <Header />
      <BackButton />
      <Card
        upperText="De 2024 à 2025"
        title="Alternance à Gustave Roussy (Villejuif - Île de France)"
        nodes={
          <ul className="list-disc ml-4">
            <li>
              Gestion de projet du système d&apos;information décisionnel (SID)
              <ul className="list-disc ml-4">
                <li>
                  Intégrations de données de génétique et universitaire dans le
                  SID
                  <ul className="list-disc ml-4">
                    <li>Analyse des besoins</li>
                    <li>Rédaction des spécifications techniques</li>
                    <li>Développement des intégrations de données</li>
                    <li>Recette unitaire</li>
                    <li>
                      Réalisation de rapports structurés et de tableaux de bord.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Création et extension de base de données décisionnels</li>
            <li>Maintien en condition opérationnel du SID</li>
          </ul>
        }
        images={[
          {
            src: GRLogo,
            alt: "Logo de Gustave Roussy",
            text: "",
            imgHref: "https://www.gustaveroussy.fr",
            size: 350,
          },
        ]}
      />
      <Card
        upperText="De Janvier 2024 à Mars 2024"
        title="Stage en développement logiciel à Apyclic (Nevers - Nièvre)"
        nodes={
          <ul className="list-disc ml-4">
            <li>
              Développement de nouveaux outils de gestion et de statistiques
              <ul className="list-disc ml-4">
                <li>
                  Gestion des pièces électroniques via leur numéro de série
                </li>
                <li>Analyse de la fréquentation de leur point de vente.</li>
                <li>
                  Ces logiciels comprennent :
                  <ul className="list-disc ml-4">
                    <li>Une interface utilisateur</li>
                    <li>
                      Une base de données déployée sur le réseau de
                      l&apos;entreprise
                    </li>
                  </ul>
                </li>
                <li>
                  Langages utilisés :
                  <ul className="list-disc ml-4">
                    <li>C#</li>
                    <li>XAML</li>
                    <li>MySQL</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        }
        images={[
          {
            src: ApyclicLogo,
            alt: "Logo d'Apyclic",
            text: "",
            imgHref: "https://www.apyclic.fr",
            size: 200,
          },
        ]}
      />
      <Card
        upperText="Eté 2024, été 2023, été 2022"
        title="Jobs d'été"
        nodes={
          <ul className="list-disc ml-4">
            <li>
              Employé commerciale dans une chaîne de magasin agroalimentaire
              (Leclerc)
              <ul className="list-disc ml-4">
                <li>Remplacement de personnels</li>
                <li>Maintiens du rayons frais</li>
              </ul>
            </li>
          </ul>
        }
      />
      <Card
        upperText="Eté 2018"
        title="Job d'été"
        nodes={
          <ul className="list-disc ml-4">
            <li>
              Ouvrier sur machine dans une coopérative agricole local.
              <ul className="list-disc ml-4">
                <li>Renforcement des équipes</li>
              </ul>
            </li>
          </ul>
        }
      />
    </main>
  );
}
