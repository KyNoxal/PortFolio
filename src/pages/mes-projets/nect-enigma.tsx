import Card from "../card";
import Header from "../header";
import BackButton from "../back-button";
import Image from "next/image";

export default function Accueil() {
    return (
        <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
            <Header />
            <BackButton />
            <Card
                title="Présentation"
                nodes={
                    <div>
                        <p>Next&apos;s Enigma est un jeu de puzzle intégralement jouable sur un navigateur web.
                        Il s&apos;inspire de l’univers de science-fiction des jeux vidéos “Portal” et “Portal 2” développés par Valve.</p>
                        <br></br>
                        <p>Dans Next&apos;s Enigma, vous devez résoudre des puzzles pour rejoindre la sortie de la salle et progresser dans le jeu.
                        Des niveaux de tutoriels avec une difficulté progressives sont proposés. Cependant, l&apos;utilisateur peut importer son propre niveau depuis son appareil</p>
                    </div>
                }
            />
            <Card
                title="Visuels"
                nodes={
                    <div className="flex flex-col justify-center my-5 space-y-5">
                        <Image src={"/Nect's enigma main screen.png"} height={800} width={800} alt="Recherche Futée page principale" className="rounded-lg"/>
                        <Image src={"/Nect's enigma in game screen.png"} height={800} width={800} alt="Recherche Futée page principale" className="rounded-lg"/>   
                        <Image src={"/Nect's enigma character selection.png"} height={800} width={800} alt="Recherche Futée page principale" className="rounded-lg"/>   

                    </div>
                }
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
                        <p>Ce projet a été mené en équipe de quatre personnes dans le cadre de la deuxième année de mon BUT Informatique</p>
                        <br></br>
                        <p>Il a donc pour but de valider le deuxième semestre de l&apos;année du BUT Informatique en vérifiant la bonne application des notions si-dessous :</p>
                        <ul className="list-disc ml-4">
                            <li>Conduite de projet</li>
                            <li>Travaille en équipe</li>
                            <li>Maintenabilité du code</li>
                            <li>Qualité de livraison du projet
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
    )
};