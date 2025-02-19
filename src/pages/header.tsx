import YellowButton from "./yellow-button";
import ExportedImage from "next-image-export-optimizer";
import profilPicture from "/public/images/pp.png";

export default function Header() {
  return (
    <div className="sticky top-0 bg-white h-16 w-full flex items-center justify-between px-4 shadow-md z-10">
      <div className="flex items-center">
        <ExportedImage
          src={profilPicture}
          alt="Photo de profil"
          width={50}
          height={50}
          className="mt-1  rounded-full shadow-lg"
        />
        <div className="ml-2">
          <p className="text-lg text-black font-jaro">PortFolio</p>
          <p className="text-lg text-black font-jaro">
            Corentin Echivard Lizaso
          </p>
        </div>
      </div>

      <YellowButton
        text="Voir mon CV"
        className="h-auto py-2 px-2.5 text-md mx-auto rounded-md"
        href="https://1drv.ms/f/c/89e9fdb9008639a5/EqF7t5sxJfpIhlv3ian-O-kBhZ0s_y0TCsElEhO2U1QXyQ?e=UiKvUT"
      />
    </div>
  );
}
