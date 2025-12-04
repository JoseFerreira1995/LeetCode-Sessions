function isPalindrome(s) {
  let trim = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = trim.length - 1;

  for (let i = 0; i < trim.length; i++) {
    if (trim[left] !== trim[right]) {
        return false;
    }
    left++;
    right--;
  }
  return true;
}

const runFunction = isPalindrome("Was it a car or a cat I saw?");


