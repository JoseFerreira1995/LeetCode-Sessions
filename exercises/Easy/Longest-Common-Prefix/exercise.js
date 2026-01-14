function longestCommonPrefix(strs) {
  strs.sort();
  let firstWord = strs[0];
  let lastWord = strs[strs.length - 1];

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== lastWord[i]) {
      return firstWord.slice(0, i);
    }
  }
  return firstWord;
}

const runFunction = longestCommonPrefix(["bat", "bag", "bank", "band"]);
