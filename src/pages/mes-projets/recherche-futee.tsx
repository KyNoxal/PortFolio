import Card from "../card";
import Header from "../header";
import BackButton from "../back-button";
import Image from "next/image";

export default function RechercheFutee() {
    return (
        <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
            <Header />
            <BackButton />
            <Card
                title="Présentation"
                nodes={
                    <div>
                        <p>
                            Recherche Futée est une application web développée en PHP sans framework.
                            Il provient d&apos;une observation du comité de direction de ma formation (BUT Informatique) lorsqu&apos;il s&apos;agit de l’organisation des étudiants dans leurs recherches de stages et d’alternance.
                            <br/><br/>
                            Recherche Futé propose une organisation basée sur les candidatures de l&apos;utilisateur. Il permet d&apos;enregistrer toutes les informations relatives aux offres et, par la suite, permet également de trier ses candidatures.
                            <br/><br/>
                            Enfin, recherche futée propose à l&apos;utilisateur des statistiques basée sur ses candidatures, comme le nombre de candidatures refusées, en attente, etc.
                        </p>
                    </div>
                }
            />
            <Card
                title="Visuels"
                nodes={
                    <div className="flex flex-col justify-center my-5 space-y-5">
                        <Image src={"../Recherche Futée page principale.png"} height={800} width={800} alt="Recherche Futée page principale" className="rounded-lg"/>
                        <Image src={"../Recherche Futée page demandes.png"} height={800} width={800} alt="Recherche Futée page demandes" className="rounded-lg"/>   
                    </div>
                }
            />
            <Card
                title="Technologies utilisées"
                nodes={
                    <div>
                        <ul className="list-disc ml-4">
                            <li>
                                MySQL
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
                                PHP
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