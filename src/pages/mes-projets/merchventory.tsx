import Card from "../card";
import Header from "../header";
import BackButton from "../back-button";
import MerchVentoryMainScreen from "/public/images/MechVentoryMainPage.png";
import MerchVentoryLoginScreen from "/public/images/MechVentoryLoginPage.png";

export default function Merchventory() {
  return (
    <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
      <Header />
      <BackButton />
      <Card
        title="Présentation"
        nodes={
          <div>
            <p>
              MerchVentory est une application destinée à la gestion des stocks
              et système de réservation et pré-commandes pour les groupes de
              musiques.
              <br />
              <br />
              Réalisé en php avec Symfony et SQL pour la base de données,
              l&apos;application permet aux groupes de musique de mettre en
              vente leurs produits dérivés sur l&apos;application et gérer leurs
              stocks directement depuis l&apos;application.
              <br />
              <br />
              Les clients peuvent se rendre sur le site et précommander depuis
              l&apos;application. Une fois la pré-commande réalisé, le client
              obtient un QR Code qu&apos;il montre au gestionnaire du groupe
              pour terminer la commande.
              <br />
              <br />
              MerchVentory permet également de consulter les prochaines dates de
              concerts des groupes via une carte montrant l&apos;endroit, la
              date de spectacle ainsi que les groupes qui y participent.
              <br />
              <br />
              Pour controller tout ceci, un système de compte avec des rôles est
              présent pour assurer une administration dans l&apos;entièreté du
              site.
            </p>
          </div>
        }
      />
      <Card
        title="Visuels"
        images={[
          {
            src: MerchVentoryMainScreen,
            alt: "MerchVentory page principale",
            text: "MerchVentory page principale",
          },
          {
            src: MerchVentoryLoginScreen,
            alt: "MerchVentory page de connexion",
            text: "MerchVentory page de connexion",
          },
        ]}
        imagesCenter={true}
      />
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 w-full mx-auto">
        <Card
          title="Technologies utilisées"
          nodes={
            <div>
              <ul className="list-disc ml-4">
                <li>
                  MySQL via Doctrine :
                  <ul className="list-disc ml-4">
                    <li>Base de données et mapping des entités.</li>
                  </ul>
                </li>
                <li>
                  HTML et Tailwind CSS :
                  <ul className="list-disc ml-4">
                    <li>
                      Style et structures des pages web de l&apos;application.
                      Le style responsive est également réalisé avec tailwind.
                    </li>
                  </ul>
                </li>
                <li>
                  PHP avec Symfony :
                  <ul className="list-disc ml-4">
                    <li>Partie backend du site.</li>
                  </ul>
                </li>
              </ul>
            </div>
          }
        />

        <Card
          title="Compétences utilisées"
          nodes={
            <div>
              <ul className="list-disc ml-4">
                <li>Conduite de projet.</li>
                <li>Travaille en équipe.</li>
                <li>Maintenabilité du code.</li>
                <li>Mise en pratique du langage PHP nouvellement appris.</li>
                <li>
                  Mise en pratique des bonnes conduites du web
                  <ul className="list-disc ml-4">
                    <li>Sécurités (Hachage des mots de passe et critères)</li>
                    <li>
                      Design et conception (style ergonomique et adapté aux
                      différents appareils et taille d&apos;écran)
                    </li>
                    <li>Optimisation des performances</li>
                  </ul>
                </li>
                <li>
                  Qualité de livraison du projet
                  <ul className="list-disc ml-4">
                    <li>Documentation</li>
                    <li>Remise du produit finale</li>
                    <li>Démonstration finale</li>
                  </ul>
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </main>
  );
}
