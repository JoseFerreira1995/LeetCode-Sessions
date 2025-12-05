You are given an integer array `nums` sorted in non-decreasing order.  
Your task is to remove duplicates from `nums` **in-place** so that each element appears only once.

After removing the duplicates, return the number of unique elements — denoted as `k` — such that the **first `k` elements** of `nums` contain the unique values.

---

### Notes

- The order of the unique elements must remain the same as in the original array.  
- You do **not** need to consider elements beyond the first `k` positions.  
- To be accepted, the first `k` elements of `nums` must contain all the unique elements.  
- Return `k` as the final result.

---

## Example 1

**Input:**  
`nums = [1,1,2,3,4]`

**Output:**  
`[1,2,3,4]`

**Explanation:**  
You should return `k = 4` because there are four unique elements.

---

## Example 2

**Input:**  
`nums = [2,10,10,30,30,30]`

**Output:**  
`[2,10,30]`

**Explanation:**  
You should return `k = 3` because there are three unique elements.
