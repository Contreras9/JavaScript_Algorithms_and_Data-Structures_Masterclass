/* Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both
values that sum to zero or undefined if a pair does not exist. */

// Naive Solution
function sumZero(array) {
   for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
         if (array[i] + array[j] === 0) {
            return [array[i], array[j]]
         }
      }
   }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))



// Refactor
function sumZero2(array) {
   let left = 0
   let right = array.length - 1
   while (left < right) {
      let sum = array[left] + array[right]
      if (sum === 0) {
         return [array[left], array[right]]
      } else if (sum > 0) {
         right--
      } else {
         left ++
      }
   }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]))



/* Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in the array. There can be negative
numbers in the array, but it will always be sorted. */

function countUniqueValues(arr){
   // add whatever parameters you deem necessary - good luck!
   if (arr.length === 0) {
      return 0
   }
   let i = 0
   for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
         i++
         arr[i] = arr[j]
      }
      console.log(i, j)
   }
   return i + 1
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]))

console.log(countUniqueValues([]))