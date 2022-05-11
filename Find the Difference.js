// var findTheDifference = function (s, t) {
//   if (!s) return t;
//   for (let i in t) {

//     if (s[i] in [...t]) {
//       t.splice(t.indexOf(s[i]), 1);
//     }
//   }
//   return t;
// };
var findTheDifference = function (s, t) {
  let groups = [...s]
    .map((num) => num)
    .reduce((key, val) => {
      key[val] ? ++key[val] : 1;
      return key;
    }, {});
  for (let i of t) {
    if (groups[i] > 0) {
      groups[i]--;
    } else {
      return i;
    }
  }
};
console.log(findTheDifference("zxcccw", "wcccczx"));
