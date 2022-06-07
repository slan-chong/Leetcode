var groupAnagrams = function (strs) {
  const map = {};
  strs.map((str) => {
    const sorted = str.split("").sort().join();
    map[sorted] ? map[sorted].push(str) : (map[sorted] = [str]);
  });
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
