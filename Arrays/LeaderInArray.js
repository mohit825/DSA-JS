// Level - Easy
// Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

const leaderInArray = (arr, n) => {
  let result = [];
  result.push(arr[n - 1]);
  let leader = arr[n - 1];

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] >= leader) {
      leader = arr[i - 1];
      result.push(leader);
    }
  }
  console.log(result.reverse());
};

console.log(leaderInArray([1, 2, 3, 4, 0], 5));

// Hint

// 1. Traverse the array from right side.
// 2. Keep track of current leader
// 3. If Any number is larger then current leader then that is leader.
