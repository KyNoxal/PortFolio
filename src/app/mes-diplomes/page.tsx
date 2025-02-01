import Card from "@/components/card";
import Header from "@/components/header";
import BackButton from "@/components/return-button";

export default function Accueil() {
    return (
        <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
            <Header />
            <BackButton />
            <Card
                upperText="De 2022 à 2025"
                title="BUT Informatique"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Parcours A
                            <ul className="list-disc ml-4">
                                <li>Réalisation, Conception, Développement et Validation d&apos;application</li>
                            </ul>
                        </li>
                        <li>A l&apos;IUT de Dijon - Auxerre - Nevers.</li>
                    </ul>
                }
            />
            <Card
                upperText="Juillet 2022"
                title="Baccalauréat STI2D"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Sciences et Technologies de l&apos;Industrie et du développement durable</li>
                        <li>Option ITEC (Mécanique)</li>
                        <li>Mention Bien</li>
                        <li>Option développement informatique en 1ère</li>
                    </ul>
                }
            />
            <Card
                upperText="Mars 2022"
                title="Permis de conduire"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Permis B en conduite accompagnée</li>
                    </ul>
                }
            />
            <Card
                upperText="Juillet 2019"
                title="Brevet des collèges"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Brevet des collèges au collège Hubert Robert de Méréville</li>
                        <li>Mention Assez Bien</li>
                    </ul>
                }
            />
        </main>

    )
};