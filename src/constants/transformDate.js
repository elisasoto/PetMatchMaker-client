export function transformDate(isodate) {
  const date = new Date(isodate);
  const month = date.getMonth() + 1;
  const Year = date.getFullYear();
  const day = date.getDate();
  return `${day}/${month}/${Year}`;
}
