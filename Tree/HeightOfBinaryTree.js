// GFG -->  Height of Binary Tree
// Medium

// Input:
//      1
//     /  \
//    2    3
// Output: 2

const height = (node) => {
  //your code here
  if (!node) return 0;

  return Math.max(this.height(node.left), this.height(node.right)) + 1;
};

// Hint

// Traverse left subtree and right subtree, get max value from them and add 1
