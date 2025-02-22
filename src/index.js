
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  return matrix.reduce((acc, curr, index) => {
    if (index % 2 !== 0) curr = curr.reverse();
    return acc.concat(curr);
  }, []);
}
