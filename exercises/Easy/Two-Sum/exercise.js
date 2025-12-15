/*
Using hashMap approach: 
Time Complexity -> O(n)
Space Complexity -> O(n)
*/

function twoSum(nums, target) {
  let map = {}; // nums: index

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;

    let diff = target - nums[i];

    if (map[diff] !== undefined && map[diff] !== i) {
      return [map[diff], i];
    }
  }
}

const runFunction = twoSum([4, 5, 6], 10);

console.log(runFunction);
