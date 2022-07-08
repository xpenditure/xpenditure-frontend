export const onlyNumber = (number) => {
  return number
    .replace(/[^0-9.]/g, '')
    .replace(/(\..*?)\..*/g, '$1')
    .replace(/^0[^.]/, '0');
};

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
