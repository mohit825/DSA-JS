/*
 GFG --> MEDIUM

 Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.
*/

function trappingWater(arr) {
  //your code here
  let lmax = [arr[0]];
  let rmax = [];
  let ans = 0;
  rmax[arr.length - 1] = arr[arr.length - 1];
  for (let i = 1; i < arr.length; i++) {
    lmax[i] = Math.max(lmax[i - 1], arr[i]);
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    rmax[i] = Math.max(rmax[i + 1], arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    ans += Math.min(lmax[i], rmax[i]) - arr[i];
  }
  return ans;
}

trappingWater([7, 4, 0, 9]);

/* Approach

Approach 2 (Precalculation): This is an efficient solution based on the precalculation concept:

In previous approach, for every element we needed to calculate the highest element on the left and on the right. 

So, to reduce the time complexity: 

For every element we can precalculate and store the highest bar on the left and on the right (say stored in arrays left[] and right[]). 
Then iterate the array and use the precalculated values to find the amount of water stored in this index, 
which is the same as ( min(left[i], right[i]) - arr[i] )

*/
