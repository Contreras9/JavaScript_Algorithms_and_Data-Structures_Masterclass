/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

You must do this in-place without making a copy of the array.
You must minimize the total number of operations.
*/

function moveZeros(nums) {
   // 1. Set a pointer to the last element in the array
   let last = nums.length - 1
   // 2. Walk through each element of the array
   for (let i = 0; i < last; i++) {
   // 3. If the element is zero,
      if (nums[i] === 0) {
         // swap its position with the element at the pointer,
         // [nums[i], nums[last]] = [nums[last], nums[i]]
         // Remove the zero at i,
         nums.splice(i, 1)
         // push it onto the end of the array
         nums.push(0)
         // then decrement the pointer.
         last--
      }
   }
   return nums
}

console.log(moveZeros([0,1,0,3,12]))



/* Python Solution
def move_zeroes(nums):

    # 1. Set a pointer to the last element in the array
    last = len(nums) - 1

    # 2. Walk through each element of the array
    i = 0
    while i < last:

        # 3. If the element is zero,
        if nums[i] == 0:
            # Remove the zero at i,
            nums.pop(i)
            # push it onto the end of the array
            nums.append(0)
            # then decrement the pointer
            last -= 1

        i += 1

    return nums
    */