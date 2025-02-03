import Link from 'next/link';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  target: React.HTMLAttributeAnchorTarget;
  href: string;
  children: ReactNode;
  classNameLink?: string;
  rel?: string;
}

function ButtonLink({
  href,
  target,
  rel,
  children,
  classNameLink,
  ...rest
}: ButtonLinkProps) {
  return (
    <button
      {...rest}
      className={`transition-all ease-linear duration-100 active:scale-95 ${rest.className}`}
    >
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`flex flex-row gap-1 sm:gap-3 items-center ${classNameLink}`}
      >
        {children}
      </Link>
    </button>
  );
}

export default ButtonLink;
