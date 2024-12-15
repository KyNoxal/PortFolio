import Card from "@/components/card";
import Header from "@/components/header";

export default function Accueil() {
	return (
		<main className="bg-wheat w-full justify-center min-h-screen">
			<Header />
			<Card
				title="À propos de moi :"
				nodes={<p>Étudiant en alternance - 3ème année de BUT informatique - Réalisation,
					Conception, Développement, Validation d'Application à l'IUT de
					Dijon/Auxerre/Nevers.</p>}
			/>
			<Card
				title="Mes diplômes :"
				nodes={
					<ul className="list-disc ml-4">
						<li>DUT Informatique à l’IUT de Dijon - Auxerre - Nevers</li>
						<li>BAC STI2D Mention Assez bien au Lycée Général et technologique Geoffroy Saint Hillaire</li>
					</ul>
				}
			/>
			<Card
				title="Mon parcours professionnel :"
				nodes={
					<ul className="list-disc ml-4">
						<li>Emploi dans la chaîne de magasin Leclerc en rayons frais</li>
						<li>Emploi dans une coopérative agricole pendant deux mois en tant qu’ouvrier sur machine</li>
					</ul>
				}
			/>
			<Card
				title="Mes ambitions :"
				nodes={
					<ul className="list-disc ml-4">
						<li>Faire de mes passions mon travail</li>
						<li>Obtenir un Master en développement web</li>
						<li>Proposer des outils (logiciels, algorithmes) de qualité</li>
					</ul>
				}
			/>
			<Card
				title="Mes projets et réalisations :"
				nodes={
					<ul className="list-disc ml-4">
						<li>Création d’un logiciel Windows de gestion de composants électroniques</li>
						<li>Création d’une IA capable de jouer aux dames et aux morpions</li>
						<li>Développement d’un jeu de puzzle en JavaScript            </li>
					</ul>}
			/>
		</main>
	);
}
