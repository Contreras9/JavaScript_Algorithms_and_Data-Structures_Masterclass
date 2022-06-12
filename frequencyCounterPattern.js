// Write a function called same, which accepts two arrays.
// The function should return true if every value in the 
// array has it's corresponding value squared in the second
// array. The frequency of values must be the same.


//Naive Solution
function same(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false
   }
   for (let index = 0; index < arr1.length; index++) {
      let correctIndex = arr2.indexOf(arr1[index] ** 2);
      if (correctIndex === -1) {
         return false
      }
      console.log(arr2)
      arr2.splice(correctIndex, 1)      
   }
   return true
}

same([1,2,3,2], [9,1,4,4])

function same2(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false      
   }
   let frequencyCounter1 = {}
   let frequencyCounter2 = {}
   for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
   }
   for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
   }
   for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
         return false
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
         return false         
      }
   }
   console.log(frequencyCounter1)
   console.log(frequencyCounter2)
   return true
}

same2([1,2,3,2], [9,1,4,4])
same2([1,2,3,2,5], [9,1,4,4,11])

// So we had two arrays we break them down into objects that sort of classify
// what's in those arrays and then we can compare those objects, and this allows
// us to improve our code significantly.