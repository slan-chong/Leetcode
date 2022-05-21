var shuffle = function (nums, n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(nums[i], nums[i + n]);
  }
  console.log(ans);
  return ans;
};
shuffle([2, 5, 1, 3, 4, 7], 3);
