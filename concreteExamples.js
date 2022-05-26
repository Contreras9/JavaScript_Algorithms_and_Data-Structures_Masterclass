// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa") // {a: 4}
// Should it just return the letters that are in there, what about the letters that aren't there?
// Do we want to included {a: 4, b: 0, c:0}
charCount("hello") // {h: 1, e: 1, l: 2, o: 1}

"my phone number is 779099"
// If this was an input, what would we expect to return?
// Do we want to account for spaces?
// What about other charactors, $, _, numbers? Are we going to put numbers in there? 

"Hello hi"
// Do we store uppercase and lowercase h or do we ignore casing?
// How should this work, should our object have uppercase H or lowercase are just h 2?

charCount()
// What if somebody does charCount and doesn't pass anything in like this or an empty string, what do we want to return?
// Do we want to return an empty object {} at the end, do we want to return null, false, undefined or maybe an error?
// What if somebody passes in something that isn't a string, they passed in a number, an object {} or null?
