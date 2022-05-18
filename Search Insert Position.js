var searchInsert = function (nums, target) {
  if (nums.indexOf(target) == -1) {
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
  }
  let min = 0,
    max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (target == nums[mid]) {
      return nums.indexOf(target);
    } else {
      target < nums[mid] ? (max = mid - 1) : (min = mid + 1);
    }
  }
};
console.log(searchInsert([1, 3, 5, 6], 5));
