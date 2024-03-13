import React, { ReactNode } from 'react';

interface IContainerContentTextProps {
  children: ReactNode;
}

export default function ContainerContentText({
  children
}: IContainerContentTextProps) {
  return <p className="mb-4">{children}</p>;
}
