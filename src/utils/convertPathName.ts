export const convertPathName = (
  pathName: string,
  translations: { [key: string]: string }
) => {
  const translated = translations[pathName];
  return translated
    ? `${translated}`
    : 'Não foi possível encontrar essa página';
};
