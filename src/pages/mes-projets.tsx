import Card from "./card";
import Header from "./header";
import BackButton from "./back-button";
import Image from "next/image";

export default function MesProjets() {
    return (
        <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
            <Header />
            <BackButton />
            <Card
                title="Nect’s Enigma"
                nodes={
                    <div>
                        <ul className="list-disc ml-4">
                            <li>Jeu de puzzle 2D en JavaScript inspiré de la série de jeux “Portal” et “Portal 2” de Valve</li>
                        </ul>
                        <div className="flex flex-row justify-center my-5">
                            <Image src={"./Nect's enigma in game screen.png"} height={800} width={800} alt="Next's Enigma" className="rounded-lg"/>
                        </div>
                    </div>
                }
                href="/mes-projets/nect-enigma"
                // href="/nect-enigma"
            />
            <Card
                title="Recherche Futée"
                nodes={
                    <div>
                        <ul className="list-disc ml-4">
                            <li>Application web en php sans framework de gestion et recherche de stage et d’alternance</li>
                        </ul>
                        <div className="flex flex-row justify-center my-5">
                            <Image src={"./Recherche Futée page principale.png"} height={800} width={800} alt="Recherche Futée page principale" className="rounded-lg"/>
                        </div>
                    </div>
                }
                href="/mes-projets/recherche-futee"
                // href="/recherche-futee"
            />
            
            <Card
                title="FamilyLink"
                nodes={
                    <div>
                        <ul className="list-disc ml-4">
                            <li>Application web en php avec le framework Symfony</li>
                            <li>Destiné à un usage familiale privée</li>
                        </ul>
                        <div className="flex flex-row justify-center my-5">
                            <Image src={"./FamilyLink accueil.png"} height={800} width={800} alt="FamilyLink accueil" className="rounded-lg"/>
                        </div>
                    </div>
                }
            />
            <Card
                title="PortFolio"
                nodes={
                    <div>
                        <ul className="list-disc ml-4">
                            <li>Ce PortFolio a été réalisé en React et NextJS</li>
                        </ul>
                        <div className="flex flex-row justify-center my-5">
                            {/* <Image src={"./FamilyLink accueil.png"} height={800} width={800} alt="FamilyLink accueil" className="rounded-lg"/> */}
                        </div>
                    </div>
                }
            />
        </main>

    )
};