var numIdenticalPairs = function (nums) {
  const map = {};
  let count = 0;
  nums.map((num) => {
    if (map[num]) {
      count += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  });
  return count;
};

console.log(numIdenticalPairs([1, 1, 1, 1]));
