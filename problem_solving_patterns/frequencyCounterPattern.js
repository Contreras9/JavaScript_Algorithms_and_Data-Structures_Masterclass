/* Write a function called same, which accepts two arrays.
The function should return true if every value in the 
array has it's corresponding value squared in the second
array. The frequency of values must be the same. */


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

/* So we had two arrays we break them down into objects that sort of classify
what's in those arrays and then we can compare those objects, and this allows
us to improve our code significantly. */


function validAnagram(str1, str2){
   // add whatever parameters you deem necessary - good luck!
   if (str1.length !== str2.length) {
      return false
   }

   const obj = {}

   for (let index = 0; index < str1.length; index++) {
      const letter = str1[index]
      // if letter exists, increment, otherwise set to 1
      obj[letter] ? obj[letter] += 1 : obj[letter] = 1
   } console.log(obj)
   for (let index = 0; index < str2.length; index++) {
      const letter = str2[index]
      // can't find letter or letter is zero then it's not an anagram
      if (!obj[letter]) {
         return false
      }
      else {
         obj[letter] -= 1
      }
   } console.log(obj)
   return true
 }

 validAnagram('anagram', 'nagaram')



function validAnagram2(string1,string2){
   // add whatever parameters you deem necessary - good luck!
   // length 
   if (string1.length !== string2.length){
       return false 
   }
   // create object to include key= letter , value = fofl 
   let objects = {}
   // loop over first string value
   for(let value of string1){
      if( objects[value]){
         objects[value]+=1 
      }else {objects[value]=1}
   }
    for(let value of string2){
      if( objects[value]){
         objects[value]-=1 
      }else {objects[value] = -1}
   }
   
  for (let value in objects){
       if (objects[value] !== 0) {return false}
   }
   return true 
 }

 validAnagram2('anagram', 'nagaram')