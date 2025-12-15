

//Using the concat method O(n)

function getConcatenation(nums) {
  const ans = [...nums];

  return ans.concat(nums);
}


// Using the spread operator O(n)

// function getConcatenation(nums) {
//   const ans = [...nums];

//   return [...ans, ...nums];
// }

const runFunction = getConcatenation([1, 2, 3, 4]);

console.log(runFunction);
