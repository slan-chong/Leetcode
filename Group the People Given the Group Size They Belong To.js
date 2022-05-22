var groupThePeople = function (groupSizes) {
  let result = [],
    group = [];
  groupSizes.forEach((num, index) => {
    if (group[num]) {
      group[num].push(index);
    } else {
      group[num] = [index];
    }
    if (group[num].length === num) {
      result.push(group[num]);
      group[num] = [];
    }
  });
  return result;
};
console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
