import { IContentPage } from 'src/types/contentSpecialtiesType';

export const findContent = <T extends () => JSX.Element>(
  pathName: string,
  arrayContent: IContentPage[]
) => {
  return arrayContent.find((item) => item.key === pathName)?.content as T;
};
