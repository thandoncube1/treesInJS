/**
 * Binary Tree has a parent node and two child nodes.
 * - We have what we call a Perfect binary tree and a Full Binary tree
 * - A perfect binary tree is built in such a way that each node has two child nodes
 * - and as we go the number of total nodes on each level double every time. Everything is filled in. 
 * - The bottom layer is completely filled. The number of nodes on the last level is equal to
 * - the sum of all the nodes plus 1.
 * - The full binary tree is built in such a way that each node either has two or zero
 * - children, but never one child.
 * * LookUp - O(log N)
 * * Insert - O(log N)
 * * Delete - O(log N)
 */

// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;

// # number of nodes = 2^h - 1;  - We use -1 to give us the height of the tree
// or just the steps it takes.

export default function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
