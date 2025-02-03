export const dateFormatter = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(date);
  return formattedDate;
};
