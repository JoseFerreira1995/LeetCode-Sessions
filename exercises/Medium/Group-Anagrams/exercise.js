function groupAnagrams(strs) {
  let map = {}; // {sorted word: [elements]}

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join();

    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(strs[i]);
  }

  return Object.values(map);
}

const runFunction = groupAnagrams([
  "act",
  "pots",
  "tops",
  "cat",
  "stop",
  "hat",
]);
