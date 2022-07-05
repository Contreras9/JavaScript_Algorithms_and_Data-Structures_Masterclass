

/*
   Task:

   We are given a binary string "00010110110101"
   We have the following rules:
   - If the number is odd then subtract one
   - If the number is even, divide by two
   Question: How many of those operation sdo we need nutiil we arrive at zero?

   Example:
   9 + 1  = 10
   decimal: we have ten symbols 0,..,9

   in binary: we have only two symbols: 0,1
   101

   hexadeximal we have 16 symbols: 0,..,9,A,B,C,D,F
   10

   Convert between different bases:
   13 in decimal to binary

   13/3 = 2*6 + 1
   6 = 2*3 + 0
   3 = 2*1 + 1
   1 = 2*0 + 1
   binary is 1101

   We have 011010110010
   123450

   10101010

   000010 = 2
   01 = 1
   10 = 2
   11 = 3
   100 = 4
   101 = 5
   
   00600

    
   100
   1000
   10000

      000

      
*/


function operations(num)
{
   let digits = num.split(""); // gives us array of characters / digits with either 0 or 1

   let divs = 0;
   let subs = 0;

   while (digits.length > 0)
   {
      let lst = digits.pop();

      if (lst == "1")
      {
         subs += 1 + divs;
         divs = 0;
      }
      
      divs += 1;
   }

   return subs;
}

// console.log(operations("00011011010101"))










/*


We are given a binary string "000101101101010"
We have the following rules: 
   - If the number is odd then subtract 1
   - If the number is even divid by 2
Question: How many of those operations do we need until we arrive at zero?

Example:
9 + 1 = 0 => 10
decimal: we have ten symbols 0,..,9

In binary: we have only 2 symbols: 0 & 1

Hexadecimal: we have 16 symbols: 0,..,9,A,B,C,D,E,F
10 = 17

Convert between different bases:
13 in decimal to binary
13 / 2 = 2 * 6 + 1
6 = 2 * 3 + 0
3 = 2 * 1 + 1
1 = 2 * 0 + 1
binary is 1101

We have 01101011001

000010 = 2
01 = 1
10 = 2
11 = 3
100 = 4
101 = 5
110 = 6
111 = 7
1000 = 8

10
100
1000
10000

*/

function operations2(num) {
   let digits = num.split("") // gives us an array of characters/digits with either 0 or 1

   let divs = 0
   let subs = 0

   while (digits.length > 0) {
      let last = digits.pop()

      if (last === "1") {
         subs += 1 + divs
         divs = 0
      }
         divs += 1
   }
   return subs
}

console.log(operations2("00011011010101"))


/*
We have a binary number as a string & we have two cases, either its odd or even:

I need to find out if its odd or even?
Since its a binary number, I know that i just need to look at the last digit
   If the last digit is 1 then its odd
   If the last digit is 0 then its even
So I have a way to check

Next I want to go thru the digits of the number and process only the last digit because of the rules
   - If the number is odd then subtract one
   - If the number is even, divide by two
I only need need to check the last digit

SO I start by taking the string and we split it into an array because once I have an array of a digit 1 or 0
I can use the pop() operation to take the last digit in the array
So I look at the length of the string if its greater than 0 I have digits now
Then I pop out the last digit I do this because as long as I have digits I need to reduce them
In each itertion of the loop I can process two steps at once If its 1 I first have to subtract 1 which makes it zero
so in the next iteration I'll devide it. When its a zero and I pop it I'm okay with it and just divide. 
I count an additional step which is the subtraction, so I count one division and when its one I additionally count 1 subtraction.
Then I keep repeating. 

The only edge case I need to watch out for is that a binary number can have leadings. For this I should not count the divisions for leadings
This means when I have a division I can count it but I don't yet add it to the final result. The divisions only get added once I find a leading 1, when I find a 
leading 1, I take all the divisions I have so far and I add them to the result. If I have leading zeros that are not followed by leading one those wouldn't be taken into account.
So in the if we say everytime we have a one I reset the division counter and I take the ones that i currently have and add them to the results.
This will accumulate the total of operations that I did into the subs and return it.

To sum it up what we need is:
We make it into an array then we pop the last element, we only look at the last element
Then we have two cases we need to check if its odd or even to know if we need to divide or subtract and divide.
I always count a division and if its a one I count the division and the subtraction.
We also need to handle edge cases for leading zeros, so everytime I have a one I will reset the divisions and add them to the subtractions.
To make sure that divisions are only counted everytime we have a one. If divisions without leading 1, it will be ignored.


*/