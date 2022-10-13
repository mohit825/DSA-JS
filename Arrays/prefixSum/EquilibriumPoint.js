// Level - Easy

// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
// Note: Retun the index of Equilibrium point. (1-based index)

const EquilbriumPoint = (a, n) => {
  let sum = a.reduce((prev, curr) => prev + curr);
  let lsum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum - a[i];
    if (sum === lsum) {
      return i + 1;
    }
    lsum = lsum + a[i];
  }
  return -1;
};

console.log(EquilbriumPoint([1, 3, 5, 2, 2], 5));

// **************************** Solution ****************************

// 1) Initialize leftsum  as 0
// 2) Get the total sum of the array as sum
// 3) Iterate through the array and for each index i, do following.
//     a)  Update sum to get the right sum.
//            sum = sum - arr[i]
//        // sum is now right sum
//     b) If leftsum is equal to sum, then return current index.
//        // update leftsum for next iteration.
//     c) leftsum = leftsum + arr[i]
// 4) return -1
// // If we come out of loop without returning then
// // there is no equilibrium index
