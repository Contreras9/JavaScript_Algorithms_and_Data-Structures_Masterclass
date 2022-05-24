// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function sumUpTo(n) {
   let sum = 0
   for (let i = 1; i <= n; i++) {
      sum += i
   }
   return sum
}

let t1 = performance.now()
sumUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function sumUp2(n) {
   return n * (n + 1) / 2
}

let tOne = performance.now()
sumUp2(1000000000)
let tTwo = performance.now()
console.log(`Time Elapsed: ${(tTwo - tOne) / 1000} seconds.`)