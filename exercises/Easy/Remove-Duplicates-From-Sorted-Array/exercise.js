function removeDuplicates(nums) {
  //k starts with 1 because we can assume ther's at least one unique number
  let k = 1;

  //loop starts in index 1 to compare with previous element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

const runFunction = removeDuplicates([1,1,2,2,3,3,4,4,5,5])

