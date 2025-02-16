import Link from "next/link";
import React from "react";

type YellowButtonProps = {
  text: string;
  className?: string;
  href?: string;
};

export default function YellowButton({
  text,
  className,
  href,
}: YellowButtonProps) {
  return (
    <Link href={href ?? "#"}>
      <button
        className={`bg-yellow text-gray-900 hover:bg-yellowhover shadow-lg hover:scale-110 hover:ease-in-out duration-200 ${className}`}
      >
        {text}
      </button>
    </Link>
  );
}
