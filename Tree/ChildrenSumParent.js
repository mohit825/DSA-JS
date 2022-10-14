// GFG -->  Children Sum Parent
// Easy

// Given a Binary Tree. Check whether all of its nodes have the value equal to the sum of their child nodes.

// Input:
//        1
//      /   \
//     4     3
//    /  \
//   5    N
// Output: 0
// Explanation: Here, 1 is the root node
// and 4, 3 are its child nodes. 4 + 3 =
// 7 which is not equal to the value of
// root node. Hence, this tree does not
// satisfy the given conditions.

const isSumProperty = (node) => {
  if (!node) return 1;
  if (!node.left && !node.right) return 1;
  let sum = 0;
  if (node.left !== null) {
    sum += node.left.data;
  }
  if (node.right !== null) {
    sum += node.right.data;
  }
  return sum === node.data &&
    this.isSumProperty(node.left) &&
    this.isSumProperty(node.right)
    ? 1
    : 0;
};
