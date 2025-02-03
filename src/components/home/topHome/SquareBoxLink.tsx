import React, { ReactNode, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

interface SquareBoxLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  href: string;
}

const styleCustom = `flex flex-col w-fit h-fit items-center justify-center 
bg-black/20 border-2 border-black/20 hover:border-white 
text-white overflow-hidden`;

const SquareBoxLink = ({
  children,
  className,
  ...rest
}: SquareBoxLinkProps) => {
  return (
    <Link
      {...rest}
      target="_parent"
      className={className ? className : styleCustom}
    >
      {children}
    </Link>
  );
};

export default SquareBoxLink;
