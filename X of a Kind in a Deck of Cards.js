const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
var hasGroupsSizeX = function (deck) {
  let group = deck.reduce((key, val) => {
    key[val] = key[val] ? ++key[val] : 1;
    return key;
  }, {});
  return Object.values(group).reduce(gcd) > 1;
};
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3, 3]));
