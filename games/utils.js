const random = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.floor(rand);
};

export default random;
