import Card from "../card";
import Header from "../header";
import BackButton from "../back-button";

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
                            MerchVentory est une application destinée à la gestion des stocks et 
                            système de réservation et pré-commandes pour les groupes de musiques.
                            <br/><br/>
                            Réalisé en php avec Symfony et SQL pour la base de données, 
                            l&apos;application permet aux groupes de musique de mettre en vente leurs 
                            produits dérivés sur l&apos;application et gérer leurs stocks directement 
                            depuis l&apos;application.
                            <br/><br/>
                            Les clients peuvent se rendre sur le site et précommander depuis 
                            l&apos;application. Une fois la pré-commande réalisé, le client obtient 
                            un QR Code qu&apos;il montre au gestionnaire du groupe pour terminer la 
                            commande.
                            <br/><br/>
                            MerchVentory permet également de consulter les prochaines dates
                            de concerts des groupes via une carte montrant l&apos;endroit, 
                            la date de spectacle ainsi que les groupes qui y participent.
                            <br/><br/>
                            Pour controller tout ceci, un système de compte avec des rôles 
                            est présent pour assurer une administration dans l&apos;entièreté du site.
                        </p>
                    </div>
                }
            />
            <Card
                title="Visuels"
                nodes={
                    <div className="flex flex-col justify-center my-5 space-y-5">
                        {/* <Image src={"/Recherche Futée page principale.png"} height={800} width={800} alt="Recherche Futée page principale" className="rounded-lg" /> */}
                        {/* <Image src={"/Recherche Futée page demandes.png"} height={800} width={800} alt="Recherche Futée page demandes" className="rounded-lg" /> */}
                    </div>
                }
            />
            <Card
                title="Technologies utilisées"
                nodes={
                    <div>
                        <ul className="list-disc ml-4">
                            <li>
                                MySQL via Doctrine
                                <ul className="list-disc ml-4">
                                    <li>Base de données</li>
                                </ul>
                            </li>
                            <li>
                                HTML et Tailwind CSS
                                <ul className="list-disc ml-4">
                                    <li>Style et structures des pages web de l&apos;application</li>
                                </ul>
                            </li>
                            <li>
                                PHP avec Symfony
                                <ul className="list-disc ml-4">
                                    <li>Partie backend du site</li>
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
                        <p>Ce projet a été mené en équipe de 5 personnes dans le cadre de la fin de deuxième année de mon BUT Informatique</p>
                        <br></br>
                        <p>Il a donc pour but de valider le troisième semestre de l&apos;année du BUT Informatique en vérifiant la bonne application des notions si-dessous :</p>
                        <ul className="list-disc ml-4">
                            <li>Conduite de projet</li>
                            <li>Travaille en équipe</li>
                            <li>Maintenabilité du code</li>
                            <li>Mise en pratique du langage PHP nouvellement appris</li>
                            <li>
                                Mise en pratique des bonnes conduites du web
                                <ul className="list-disc ml-4">
                                    <li>Sécurités (Hachage des mots de passe et critères)</li>
                                    <li>Design et conception (style ergonomique et adapté aux différents appareils et taille d&apos;écran)</li>
                                    <li>Optimisation des performances</li>
                                </ul>
                            </li>
                            <li>Qualité de livraison du projet
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
        </main>
    )
};