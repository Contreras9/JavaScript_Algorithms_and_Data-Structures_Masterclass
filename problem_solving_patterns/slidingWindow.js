/* Write a function called maxSubarraySum which accepts
an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive
elements in the array. */


// Naive Solution
function maxSubarraySum(arr, num) {
   if (num > arr.length) {
      return null
   }
   let max = -Infinity
   for (let i = 0; i < arr.length - num + 1; i++) {
      temp = 0
      for (let j = 0; j < num; j++) {
         temp += arr[i + j]
      }
      if (temp > max) {
         max = temp
      }
      console.log(temp, max)
   }
   return max
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))


// Refactor
function maxSubarraySum2(arr, num) {
   let maxSum = 0
   let tempSum = 0
   if (arr.length < num) return null
   for (let i = 0; i < num; i++) {
      maxSum += arr[i]
   }
   tempSum = maxSum
   for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i]
      maxSum = Math.max(maxSum, tempSum)
      console.log(tempSum, maxSum)
   }
   return maxSum
}

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))