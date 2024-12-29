import Card from "@/components/card";
import Header from "@/components/header";
import BackButton from "@/components/return-button";

export default function Accueil() {
    return (
        <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
            <Header />
            <BackButton />
            <Card
                title="À propos de moi :"
                nodes={<p>Actuellement Étudiant en alternance en3ème année de BUT informatique 
                    (Réalisation, Conception, Développement et Validation d'Application) 
                    à l'IUT de Dijon -Auxerre - Nevers. Le domaine de l'informatique est 
                    pour moi une passion. C’est pour cela que j’ai choisi de
                     faire des études dans le domaine de l’informatique.</p>}
            />
            <Card
                title="Mes loisirs et centre d’intérêts :"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Je suis trompettiste niveaux troisième cycle avec neuf ans de formation de solfège</li>
                        <li>J’ai également joué dans l’orchestre du Sud Essonne pendant trois ans.</li>
                        <li>Depuis longtemps, l’informatique fait partie de mes loisirs. J’aime bien me tenir 
                            informé des nouvelles technologies et découvrir de nouvelles méthodes</li>
                        <li>Le monde du ferroviaire m’a toujours attiré. Les innovations et les nouvelles technologies dans ce secteur m’ont toujours intéressé.</li>
                        <li>J’ai pratiqué le tir à l’arc en club pendant deux ans</li>
                        <li>J’adore faire de la course d’orientation en forêts</li>
                    </ul>
                }
            />
            <Card
                title="Associatif"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>J’ai été trésorier de l’association étudiante de ma formation</li>
                        <li>Je suis bénévole dans le comité de fêtes du Mérévillois ainsi que dans l’association Farine de froment</li>
                    </ul>
                }
            />
            <Card
                title="Autre"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Film réalisé avec un réalisateur diplômé du Cours  Florent et diffusé aux cinémas locaux.</li>
                        <li>Spectacle d’ouverture du concours international de  trompette à Rouen, édition de 2017</li>
                    </ul>
                }
            />
        </main>
    );
}
