import Link from 'next/link';
import React from 'react';

type GrayButtonProps = {
  text: string;
  className?: string;
  href?: string;
}

export function GrayButton({ text, className, href }: GrayButtonProps) {
  return <Link href={href?? "#"}>
        <button className={`bg-graybutton text-gray-900 hover:bg-graybuttonhover shadow-lg hover:scale-110 hover:ease-in-out duration-200 ${className}`} >
            {text}
        </button>
    </Link>;
}
