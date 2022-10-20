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
