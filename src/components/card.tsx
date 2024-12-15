import ReactMarkdown from "react-markdown";
import { GrayButton } from "./gray-button";
import { ReactNode } from "react";

type CardProps = {
    title: string,
    nodes: ReactNode
}

export default function Card({title, nodes}:CardProps) {
  return (
    <div className="my-4 mx-3 h-fit px-3 py-2 rounded-md bg-gray-50 text-black">
        <h1 className="text-2xl font-jaro font-bold">{title}</h1>
        {nodes}    
        
        <div className="flex justify-end m-2">
            <GrayButton text="En savoir plus" className="h-auto py-2 px-2.5 text-md mx-auto rounded-md my-2 justify-end"/>
        </div>
    </div>
  );
}
