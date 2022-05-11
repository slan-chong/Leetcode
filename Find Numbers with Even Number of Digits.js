const FindNumberswithEvenNumberofDigits = (nums) => {
  let ans = 0;
  for (let i of nums) {
    String(i).length % 2 == 0 ? ans++ : ans;
  }

  return ans;
};

console.log(FindNumberswithEvenNumberofDigits([12, 345, 2, 6, 7896])); //2
