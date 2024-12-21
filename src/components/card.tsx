import { GrayButton } from "./gray-button";
import { ReactNode } from "react";

type CardProps = {
  upperText?: string,
  title: string,
  nodes: ReactNode,
  href?: string,
}

export default function Card({ upperText, title, nodes, href }: CardProps) {
  if (href?.length && href?.length > 0) {

    return <>
      <div className="mt-4 mx-5 text-lg text-black">
        {upperText}
      </div>
      <div className="mb-4 mx-3 h-fit px-3 py-2 rounded-md bg-gray-50 text-black">
        <h1 className="text-2xl font-jaro font-bold">{title}</h1>
        <div className="m-3">{nodes}</div>


        <div className="flex justify-end m-2">
          <GrayButton text="En savoir plus" className="h-auto py-2 px-2.5 text-md mx-auto rounded-md my-2 justify-end" href={href} />
        </div>
      </div>
    </>;
  } else {
    return <>
      <div className="mt-4 mx-5 text-lg text-black">
        {upperText}
      </div>
      <div className="mb-4 mx-3 h-fit px-3 py-2 rounded-md bg-gray-50 text-black">
        <h1 className="text-2xl font-jaro font-bold">{title}</h1>
        <div className="m-3">{nodes}</div>
      </div>
    </>;
  }
}
