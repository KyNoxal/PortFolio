
import Link from 'next/link';
import React from 'react';

type YellowButtonProps = {
  text: string;
  className?: string;
  href?: string;
}

export function YellowButton({ text, className, href }: YellowButtonProps) {
  return <Link href={href? href : "#"}>
        <button className={`mt-8 px-6 py-2 bg-yellow text-gray-900 font-medium rounded-full hover:bg-yellowhover shadow-lg hover:scale-110 hover:ease-in-out duration-200 ${className}`} >
            {text}
        </button>
    </Link>;
}
