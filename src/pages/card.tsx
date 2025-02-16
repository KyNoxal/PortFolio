import { ReactNode } from "react";
import GrayButton from "./gray-button";
import { StaticImageData } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

type ImageData = {
  src: StaticImageData;
  alt: string;
  text: string;
  imgHref?: string;
  size?: number;
};

type CardProps = {
  upperText?: string;
  title: string;
  nodes: ReactNode;
  href?: string;
  images?: ImageData[];
};

export default function Card({
  upperText,
  title,
  nodes,
  href,
  images,
}: CardProps) {
  return (
    <div className="h-fit">
      <div className="ml-3 mx-0 text-lg text-black">{upperText}</div>
      <div className="mb-4 mx-3 h-fit px-3 py-2 rounded-md bg-gray-50 text-black">
        <h1 className="text-2xl font-jaro font-bold">{title}</h1>
        <div className="flex justify-between">
          <div className="m-3">{nodes}</div>

          <div className="relative bottom-4 gap-2 grid-cols-3 w-5/12 mr-4 justify-between hidden md:flex">
            {images &&
              images.map((image, index) => (
                <div
                  key={index}
                  className="w-fit p-2 mb-2 rounded-md hover:shadow-xl transition-shadow"
                >
                  <Link href={image.imgHref ?? "#"}>
                    <ExportedImage
                      src={image.src}
                      height={image.size || 400}
                      width={image.size || 400}
                      alt="Nect's Enigma menu principale"
                      className="rounded-md mr-2"
                    />
                    <span className="text-gray-700 w-10 text-center justify-self-center">
                      {image.text}
                    </span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-end m-2 flex-shrink-0">
          {href?.length && href?.length > 0 ? (
            <GrayButton
              text="En savoir plus"
              className="relative bottom-3 h-auto py-2 px-2.5 text-md mx-auto rounded-md my-2 justify-end"
              href={href}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
