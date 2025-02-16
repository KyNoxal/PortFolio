import Card from "../card";
import Header from "../header";
import BackButton from "../back-button";
import nectsEnigmaMainScreenImg from "/public/images/Nect's enigma main screen.png";
import nectsEnigmaInGameScreenImg from "/public/images/Nect's enigma in game screen.png";
import nectsEnigmaCharacterSelection from "/public/images/Nect's enigma character selection.png";

export default function Accueil() {
  return (
    <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
      <Header />
      <BackButton />
      <Card
        title="Présentation"
        nodes={
          <div>
            <p>
              Nect&apos;s Enigma est un jeu de puzzle intégralement jouable sur
              un navigateur web. Il s&apos;inspire de l’univers de
              science-fiction des jeux vidéos “Portal” et “Portal 2” développés
              par Valve.
            </p>
            <br></br>
            <p>
              Dans Nect&apos;s Enigma, vous devez résoudre des puzzles pour
              rejoindre la sortie de la salle et progresser dans le jeu. Des
              niveaux de tutoriels avec une difficulté progressives sont
              proposés. Cependant, l&apos;utilisateur peut importer son propre
              niveau depuis son appareil
            </p>
          </div>
        }
      />
      <Card
        title="Visuels"
        images={[
          {
            src: nectsEnigmaMainScreenImg,
            alt: "Nect's Enigma menu principale",
            text: "Nect's Enigma menu principale",
          },
          {
            src: nectsEnigmaInGameScreenImg,
            alt: "Nect's Enigma écran en jeu",
            text: "Nect's Enigma écran en jeu",
          },
          {
            src: nectsEnigmaCharacterSelection,
            alt: "Nect's Enigma sélection du personnage",
            text: "Nect's Enigma sélection du personnage",
          },
        ]}
        imagesCenter={true}
      />
      <Card
        title="Technologies utilisées"
        nodes={
          <div>
            <ul className="list-disc ml-4">
              <li>
                JavaScript
                <ul className="list-disc ml-4">
                  <li>Moteur du jeu et éléments interactifs</li>
                </ul>
              </li>
              <li>
                HTML et CSS
                <ul className="list-disc ml-4">
                  <li>Page d&apos;affichage et page principale du jeu</li>
                </ul>
              </li>
              <li>
                JSON
                <ul className="list-disc ml-4">
                  <li>Stockage des niveaux dans un format JSON</li>
                </ul>
              </li>
            </ul>
          </div>
        }
      />
      <Card
        title="Notions utilisées"
        nodes={
          <div>
            <p>
              Ce projet a été mené en équipe de quatre personnes dans le cadre
              de la deuxième année de mon BUT Informatique
            </p>
            <br></br>
            <p>
              Il a donc pour but de valider le deuxième semestre de l&apos;année
              du BUT Informatique en vérifiant la bonne application des notions
              si-dessous :
            </p>
            <ul className="list-disc ml-4">
              <li>Conduite de projet</li>
              <li>Travaille en équipe</li>
              <li>Maintenabilité du code</li>
              <li>
                Qualité de livraison du projet
                <ul className="list-disc ml-4">
                  <li>Documentation</li>
                  <li>Remise du produit finale</li>
                </ul>
              </li>
            </ul>
          </div>
        }
      />
    </main>
  );
}
