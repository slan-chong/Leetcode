var minPartitions = function (n) {
  let ans = 0;
  for (let i of n) {
    ans = parseInt(i) > ans ? parseInt(i) : ans;
  }
  return ans;
};
n = "27346209830709182346";
console.log(minPartitions(n));
