import React, { ReactNode } from 'react';

interface TableInfoProps {
  children: ReactNode;
}

export default function TableInfo({ children }: TableInfoProps) {
  return <div className="p-3">{children}</div>;
}
