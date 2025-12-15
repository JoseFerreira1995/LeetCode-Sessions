/*
Using hashSet approach: 
Time Complexity -> O(n)
Space Complexity -> O(n)
*/

function hasDuplicate(nums) {
  let set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}

const runFunction = hasDuplicate([1, 2, 2, 3]);

console.log(runFunction);
