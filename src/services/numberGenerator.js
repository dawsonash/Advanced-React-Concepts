export const getRandomNumbers = (count, max) => {
  const randoms = [];
  while (randoms.length < count) {
    const r = Math.floor(Math.random() * max);
    randoms.push(r);
  }
  return randoms;
};
