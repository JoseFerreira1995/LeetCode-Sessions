Given an integer array `nums` and an integer `val`, remove all occurrences of `val` from `nums` **in-place**.  
The order of the elements may change.  
Then return the number of elements in `nums` that are **not** equal to `val`.

Let the number of elements not equal to `val` be `k`.  
To be accepted, you must:

1. Modify the array `nums` so that the **first `k` elements** contain the values not equal to `val`.  
2. The remaining elements beyond `k` are irrelevant.  
3. Return `k`.

---

## Custom Judge

The judge will test your solution using the following logic:

```java
int[] nums = [...]; // Input array
int val = ...;      // Value to remove
int[] expectedNums = [...]; // Expected output with correct length (no val)

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort only the first k elements

for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```


## Example 1

**Input:**
nums = [3,2,2,3], val = 3

**Output:**
2, nums = [2,2,_,_]

**Explanation:**
Your function should return k = 2, with the first two elements being 2.
Values beyond index k do not matter (shown as underscores).

## Example 2

**Input:**
nums = [0,1,2,2,3,0,4,2], val = 2

**Output:**
5, nums = [0,1,4,0,3,_,_,_]

**Explanation:**
Your function should return k = 5, with the first five elements containing any order of
0, 1, 3, 0, 4.
Elements beyond k are irrelevant.