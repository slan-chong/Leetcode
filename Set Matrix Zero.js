const findZero = (matrix) => {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) arr.push([i, j]);
    }
  }
  return arr;
};
var setZeroes = function (matrix) {
  const zero = findZero(matrix);
  for (let i = 0; i < zero.length; i++) {
    var [x, y] = zero[i];

    for (let j = 0; j < matrix[0].length; j++) {
      matrix[x][j] = 0;
    }

    for (let j = 0; j < matrix.length; j++) {
      matrix[j][y] = 0;
    }
  }
  console.log(matrix);
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
