import Link from 'next/link';
import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaBookOpenReader } from 'react-icons/fa6';

interface IProps {
  children: ReactNode;
}
interface IContentProps extends IProps {
  currentPath: string;
  imageProps: StaticImageData;
  alt: string;
}

export function Description({ children }: IProps) {
  return <p className="text-base mb-4">{children}</p>;
}
export function ContainerGrid({ children }: IProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[70px] sm:gap-6 items-center justify-center w-full h-full mb-16">
      {children}
    </ul>
  );
}

export function ContentGrid({
  children,
  currentPath,
  imageProps,
  alt
}: IContentProps) {
  return (
    <li className="relative max-w-[445px] w-full justify-self-center active:scale-95  hover:shadow-md  active:opacity-70 transition-all ease-in-out duration-200">
      <Link href={currentPath} target="_self">
        <Image
          width={415}
          height={243}
          src={imageProps}
          alt={alt}
          placeholder="blur"
          loading="eager"
          priority
          style={{
            width: 'auto',
            height: 'auto',
            minWidth: '100%',
            maxWidth: '100%'
          }}
          className="rounded-md"
        />
        <div className="w-11/12 h-32 flex absolute bg-whiteSnow/90 top-2/3 left-1/2 -translate-x-1/2 items-center justify-center rounded-md shadow-md">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-whiteSnow/80 rounded-full p-2">
            <FaBookOpenReader className="size-9  fill-lightApricotSalmon" />
          </div>
          <p className="text-center text-base text-wrap ">
            <strong>{children}</strong>
          </p>
        </div>
      </Link>
    </li>
  );
}
