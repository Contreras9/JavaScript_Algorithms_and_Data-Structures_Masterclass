function sum(array) {
   let total = 0
   for (let index = 0; index < array.length; index++) {
      total += array[index];
   }
   return total
}

console.log(sum([3,6,9,12,15,18,21,24,27,30]))