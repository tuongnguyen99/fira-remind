function getCurrentDate() {
  const date = new Date();
  return `${date.getFullYear()}-${
    (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
  }-${date.getDate()}`;
}

function formatDate(str) {
  try {
    const date = new Date(Date.parse(str));
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  } catch (error) {
    return '';
  }
}

export default getCurrentDate;
