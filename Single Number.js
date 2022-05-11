var singleNumber = function (nums) {
  let map = {};
  for (let i of nums) {
    map[i] = map[i] ? ++map[i] : 1;
  }
  for (let i of nums) {
    if (map[i] === 1) {
      return i;
    }
  }
};

singleNumber([2, 2, 1]);
