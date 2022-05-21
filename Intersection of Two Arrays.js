var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [...set1].filter((e) => {
    return [...set2].includes(e);
  });
  return result;
};
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
