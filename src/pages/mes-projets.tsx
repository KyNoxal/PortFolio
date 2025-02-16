import Card from "./card";
import Header from "./header";
import BackButton from "./back-button";
import nectsEnigmaInGameScreenImg from "/public/images/Nect's enigma in game screen.png";
import RechercheFuteeMainPage from "/public/images/Recherche Futée page principale.png";
import merchVentoryMainPage from "/public/images/MechVentoryMainPage.png";

export default function MesProjets() {
  return (
    <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
      <Header />
      <BackButton />
      <Card
        title="Nect’s Enigma"
        nodes={
          <ul className="list-disc ml-4">
            <li>
              Jeu de puzzle 2D en JavaScript inspiré de la série de jeux
              “Portal” et “Portal 2” de Valve
            </li>
          </ul>
        }
        href="/mes-projets/nect-enigma"
        images={[
          {
            src: nectsEnigmaInGameScreenImg,
            alt: "Nect's Enigma écran en jeu",
            text: "Nect's Enigma écran en jeu",
            imgHref: "/mes-projets/nect-enigma",
          },
        ]}
      />

      <Card
        title="Recherche Futée"
        nodes={
          <div>
            <ul className="list-disc ml-4">
              <li>
                Application web en php sans framework de gestion et recherche de
                stage et d’alternance
              </li>
            </ul>
            <div className="flex flex-row justify-center my-5"></div>
          </div>
        }
        href="/mes-projets/recherche-futee"
        images={[
          {
            src: RechercheFuteeMainPage,
            alt: "Logo de Recherche Futée",
            text: "Recherche Futée page principale",
            imgHref: "/mes-projets/recherche-futee",
          },
        ]}
      />

      <Card
        title="MerchVentory"
        nodes={
          <div>
            <ul className="list-disc ml-4">
              <li>
                Application de pré-commande et gestion de stock pour les groupes
                de musique.
              </li>
            </ul>
            <div className="flex flex-row justify-center my-5"></div>
          </div>
        }
        href="/mes-projets/merchventory"
        images={[
          {
            src: merchVentoryMainPage,
            alt: "MerchVentory page principale",
            text: "MerchVentory page principale",
            imgHref: "/mes-projets/merchventory",
          },
        ]}
      />

      <Card
        title="PortFolio"
        nodes={
          <div>
            <ul className="list-disc ml-4">
              <li>Ce PortFolio a été réalisé en React et NextJS</li>
            </ul>
          </div>
        }
      />
    </main>
  );
}
