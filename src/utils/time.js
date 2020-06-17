const getCurrentDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${
    (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
  }-${date.getDate()}`;
};

export default getCurrentDate;
