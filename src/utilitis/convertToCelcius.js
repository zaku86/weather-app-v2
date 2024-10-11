const convertToCelcius = (k) => {
  let c = k - 273.15;
  c = c.toFixed(2);
  return c;
};

export default convertToCelcius;
