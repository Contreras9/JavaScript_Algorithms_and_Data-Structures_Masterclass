function charCount(str) {
   let obj = {}
   for (let index = 0; index < str.length; index++) {
      const char = str[index].toLowerCase();
      if (/[a-z0-9]/.test(char)) {
         if (obj[char] > 0) {
            obj[char]++
         } else {
            obj[char] = 1
         }
      }
   }
   return obj
}

console.log(charCount("Sumaya!"))

function charCount2(str) {
   let obj = {}
   for (let char of str) {
      if (isAlphaNumeric(char)) {
         char = char.toLowerCase();
         obj[char] = ++obj[char] || 1
      }
   }
   return obj
}

function isAlphaNumeric(char) {
   let code = char.charCodeAt(0)
   if (!(code > 47 && code < 58) &&  // numeric (0-9)
       !(code > 64 && code < 91) &&  // upper alphabet (A-Z)
       !(code > 96 && code < 123)) { // lower alphabet (a-z)
      return false
   }
   return true
}

// Something to consider is the placement of when we do the lower casing.
// Is it better to lowercase everything at the beginning, the entire string and then check each character to see if it's alphanumeric?
// Is it better to first check for alphanumeric characters so that we weed out all the spaces that the punctuation, everything that's not valid and then lowercase afterwards?
/* It depends on what your strings look like, What the inputs look like, if they are generally all alphanumeric
vs if you have really weird strings that have a ton of random characters that aren't alphanumeric, the answer would depend on that */
console.log(charCount2("Hello, Sumaya"))