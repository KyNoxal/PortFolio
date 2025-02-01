import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { YellowButton } from "./yellow-button";


export default function Home() {
  return <div className="flex flex-col items-center justify-center min-h-screen bg-grayblue text-white">
      <div className="mb-6">
        <img src="/pp.png" alt="Photo de profil" className="w-40 h-40 rounded-full shadow-lg" />
      </div>

      <h1 className="text-3xl font-bold mb-2 font-jaro">Corentin Echivard Lizaso</h1>
      <p className="text-lg text-gray-400 font-actor">Étudiant en informatique</p>

      <YellowButton
        text="Découvrir mon PortFolio"
        href="/accueil"
        className="rounded-full mt-8 px-6 py-2"
      />

    </div>
}
