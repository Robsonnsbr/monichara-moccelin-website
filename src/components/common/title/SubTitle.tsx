import React from 'react';

interface ISubTitleProps {
  subTitle: string;
  classNameSubTitle?: string;
}

function SubTitle({ subTitle, classNameSubTitle }: ISubTitleProps) {
  return (
    <h1
      className={`text-deepIndigoBlue font-semibold font-poppins text-3xl ${classNameSubTitle ? classNameSubTitle : ''}`}
    >
      {subTitle.toUpperCase()}
    </h1>
  );
}

export default SubTitle;
