'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { LinkHTMLAttributes } from 'react';

interface ActiveLinksProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
}

function ActiveLink({ href, children, ...rest }: ActiveLinksProps) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      {...rest}
      href={href}
      target="_self"
      className="group w-full h-full  group-hover:text-lightApricotSalmon"
    >
      <p
        className={`transition-all ease-in-out duration-200  w-full text-base group-hover:text-lightApricotSalmon p-2 ${rest.className} ${isActive ? 'text-lightApricotSalmon font-semibold' : ''}`}
      >
        {children}
      </p>
    </Link>
  );
}

export default ActiveLink;
