var maxPower = function (s) {
  let ans = 1;
  let count = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
      ans = Math.max(ans, count);
    } else {
      count = 1;
    }
  }
  return ans;
};
maxPower("leetcode");
