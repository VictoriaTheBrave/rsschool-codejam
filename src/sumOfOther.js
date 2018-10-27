module.exports = function sumOfOther (array) {
  if (array.length === 0) return [];
  const totalSum = array.reduce((count, current) => count + current);
  return array.slice().map(el => totalSum - el);
}