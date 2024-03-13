import React from 'react';
import TitleLine from './TitleLine';
import SubTitle from './SubTitle';

interface TitleProps {
  className?: string;
  title: string;
  subTitle: string;
  classNameSubTitle?: string;
}

const Title: React.FC<TitleProps> = ({
  className,
  title,
  subTitle,
  classNameSubTitle
}) => {
  return (
    <div
      className={`'flex flex-col gap-2 pb-10 w-full text-left' ${className}`}
    >
      <TitleLine title={title} />
      <SubTitle subTitle={subTitle} classNameSubTitle={classNameSubTitle} />
    </div>
  );
};

export default Title;
