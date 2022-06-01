var minSteps = function (s, t) {
  let groupS = [...s].reduce((key, val) => {
    key[val] = key[val] ? ++key[val] : 1;
    return key;
  }, {});
  let ans = 0;
  for (let i of t) {
    groupS[i] ? --groupS[i] : ++ans;
  }
  return ans;
};
let s = "leetcode",
  t = "practice";
console.log(minSteps(s, t));
