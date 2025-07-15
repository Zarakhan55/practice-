//leetcode 
//problem:Two sum

function twoSum(nums, target) {
  const map = new Map(); // Step 1

    for (let i = 0; i < nums.length; i++) { // Step 2
    const complement = target - nums[i]; // Step 3
    if (map.has(complement)) { // Step 4
      return [map.get(complement), i]; // Step 5
    }

    map.set(nums[i], i); // Step 6
  }

  return []; // Step 7
}
console.log(twoSum([2, 44, 7, 15], 9)); 
