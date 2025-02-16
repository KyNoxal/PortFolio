import Card from "./card";
import Header from "./header";
import RechercheFuteeLogo from "/public/images/SF_RF.png";
import nectsEnigmaInGameScreenImg from "/public/images/Nect's enigma in game screen.png";
import MerchVentoryLogo from "/public/images/MerchVentoryLogo.svg";

export default function Accueil() {
  return (
    <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
      <Header />
      <Card
        title="Mes projets et réalisations :"
        nodes={
          <div>
            <p>
              À travers mes projets, je vise à concevoir des outils performants
              et intuitifs, qu’il s’agisse de logiciels ou
              <br />
              d’interfaces web, en mettant l’accent sur la qualité du code,
              l’accessibilité et l’expérience utilisateur.
            </p>
            <br></br>
            <ul className="list-disc ml-4">
              <li>
                Création d&apos;un logiciel Windows de gestion de composants
                électroniques
              </li>
              <li>
                Création d&apos;une IA capable de jouer aux dames et aux
                morpions
              </li>
              <li>Développement d&apos;un jeu de puzzle en JavaScript</li>
              <li>
                Développement de logiciels de gestion de composants
                d&apos;informatique
              </li>
              <li>
                Développement d&apos;un logiciel de statistique de fréquentation
                d&apos;un point de vente
              </li>
            </ul>
          </div>
        }
        href="mes-projets"
        images={[
          {
            src: RechercheFuteeLogo,
            alt: "Logo de Recherche Futée",
            text: "Recherche Futée",
            imgHref: "/mes-projets/recherche-futee",
            size: 100,
          },
          {
            src: nectsEnigmaInGameScreenImg,
            alt: "Page de jeu de Nect's Enigma",
            text: "Nect's Enigma",
            imgHref: "/mes-projets/nect-enigma",
            size: 300,
          },
          {
            src: MerchVentoryLogo,
            alt: "Logo de Merchventory",
            text: "MerchVentory",
            imgHref: "/mes-projets/merchventory",
            size: 500,
          },
        ]}
      />
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 w-full mx-auto">
        <Card
          title="À propos de moi :"
          nodes={
            <p>
              Étudiant en alternance - 3ème année de BUT informatique -
              Réalisation, Conception, Développement, Validation
              d&apos;Application à l&apos;IUT de Dijon/Auxerre/Nevers.
            </p>
          }
          href="/a-propos"
        />
        <Card
          title="Mes diplômes :"
          nodes={
            <ul className="list-disc ml-4">
              <li>DUT Informatique à l&apos;IUT de Dijon - Auxerre - Nevers</li>
              <li>
                BAC STI2D Mention bien au Lycée Général et technologique
                Geoffroy Saint Hilaire
              </li>
            </ul>
          }
          href="/mes-diplomes"
        />
        <Card
          title="Mon parcours professionnel :"
          nodes={
            <ul className="list-disc ml-4">
              <li>Alternance à Gustave Roussy (Villejuif - Île de France)</li>
              <li>
                Stage en développement logiciel à Apyclic (Nevers - Nièvre)
              </li>
            </ul>
          }
          href="/mon-parcours"
        />
        <Card
          title="Mes ambitions :"
          nodes={
            <p>
              Je souhaite transformer mes passions pour l’informatique et le
              développement en une carrière enrichissante. Mon objectif est
              d’obtenir un Master en développement web afin de renforcer mes
              compétences et d’explorer des domaines tels que l’intelligence
              artificielle et l’optimisation des algorithmes.
            </p>
          }
        />
      </div>
    </main>
  );
}
