function majorityElement(nums) {
  let map = {}; //{value: n}
  let result = 0; // store the value of n in nums 
  let value = 0; // store the value of the majority element  

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }

  for (let keys in map) {
    if (map[keys] > result) {
      result = map[keys];
      value = keys;
    }
  }

  return value;
}

const runFunction = majorityElement([5, 5, 1, 1, 1,1,1, 5, 5]);

console.log(runFunction)
