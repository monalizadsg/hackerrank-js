/**
 *   Return the second largest number in the array.
 **/
function getSecondLargest(nums) {
  let largest = nums[0];
  let secondLargest = nums[0];

  for (let num of nums) {
    if (num > largestNum) {
      secondLargest = largest;
      largestNum = num;
    }

    if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}
