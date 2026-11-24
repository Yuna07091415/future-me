export const formatDateUz = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const monthsUz = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
    'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
  ];
  return `${date.getDate()} ${monthsUz[date.getMonth()]}, ${date.getFullYear()}`;
};

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
