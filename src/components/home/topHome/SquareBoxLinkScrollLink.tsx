import React, { ReactNode } from 'react';
import { Link, LinkProps as ScrollLinkProps } from 'react-scroll';

interface SquareBoxLinkScrollLinkProps extends ScrollLinkProps {
  children: ReactNode;
  className?: string;
  to: string;
  href: string;
  smooth: boolean;
  duration: number;
}

const styleCustom = `flex flex-col w-fit h-fit items-center justify-center 
  bg-black/20 border-2 border-black/20 hover:border-white 
  text-white overflow-hidden`;

const SquareBoxLinkScrollLink = ({
  children,
  className,
  to,
  href,
  smooth,
  duration
}: SquareBoxLinkScrollLinkProps) => {
  return (
    <Link
      to={to}
      href={href}
      smooth={smooth}
      duration={duration}
      className={className ? className : styleCustom}
    >
      {children}
    </Link>
  );
};

export default SquareBoxLinkScrollLink;
