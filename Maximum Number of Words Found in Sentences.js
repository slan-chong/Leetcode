var mostWordsFound = function (sentences) {
  sentences = sentences.map((string) => string.split(" ").length);
  return Math.max(...sentences);
};
mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
