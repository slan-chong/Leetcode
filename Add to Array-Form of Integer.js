const AddToArrayFormOfInteger = (num, k) => {
  return [...(BigInt(num.join("")) + BigInt(k) + "")];
};
console.log(
  AddToArrayFormOfInteger(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
