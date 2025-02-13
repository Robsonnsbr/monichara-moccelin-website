'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import ContainerMedium from './container/ContainerMedium';

export default Breadcrumbs;

interface IFormattedLinks {
  href: string;
  title: string;
}
const getBreadcrumbsLinks = (linksArray: string[]): IFormattedLinks[] => {
  const homeRoute = { href: '/', title: 'Home' };

  const formattedLinks = linksArray.filter(Boolean).map((_, index, array) => {
    const title = array[index].charAt(0).toUpperCase() + array[index].slice(1);

    const isSpecialties = array[index].toLowerCase() === 'especialidades';
    const hrefCustom = isSpecialties
      ? '/#list-services'
      : `/${array.slice(0, index + 1).join('/')}`;

    return {
      href: hrefCustom,
      title
    };
  });

  return [homeRoute, ...formattedLinks];
};

function Breadcrumbs(): JSX.Element {
  const pathName = usePathname();
  const linksArray = pathName.split('/');
  const finalLinksArray = getBreadcrumbsLinks(linksArray);

  return (
    <section className={'absolute top-16 font-openSans w-full'}>
      <ContainerMedium>
        <Breadcrumb
          separator={<HiOutlineChevronRight className="text-deepIndigoBlue" />}
          className="max-w-full [&>ol]:flex-wrap"
        >
          {finalLinksArray.map((link, index) => (
            <BreadcrumbItem className="text-lightApricotSalmon" key={index}>
              <BreadcrumbLink
                as={NextLink}
                href={link.href}
                className="font-medium max-w-28 sm:max-w-full truncate p-1"
                rel="nofollow"
              >
                {link.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </ContainerMedium>
    </section>
  );
}
