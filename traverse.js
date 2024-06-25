const BinarySearchTree = require('./main.js');

BinarySearchTree.prototype.breathFirstSearch = function () {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while(queue.length > 0) {
        currentNode = queue.shift();
        // Show the node value.
        console.log(currentNode.value);
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list;
}

BinarySearchTree.prototype.breathFirstSearchR = function (queue, list) {
    if (!queue.length) {
        return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    console.log(currentNode.value);
    if (currentNode.left) {
        queue.push(currentNode.left);
    }
    if (currentNode.right) {
        queue.push(currentNode.right);
    }
    return this.breathFirstSearchR(queue, list);
}

BinarySearchTree.prototype.DFSPreorder = function () {
    return traversePreorder(this.root, []);
}

BinarySearchTree.prototype.DFSPostorder = function () {
    return traversePostorder(this.root, []);
}

BinarySearchTree.prototype.DFSInorder = function () {
    return traverseInorder(this.root, []);
}

// Inorder - [1, 4, 6, 9, 15, 20, 170]
// Preorder - [9, 4, 1, 6, 20, 15, 170]
// Postorder - [1, 6, 4, 15, 170, 20, 9]

function traversePreorder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreorder(node.left, list);
    }
    if (node.right) {
        traversePreorder(node.right, list);
    }
    return list;
}

function traverseInorder(node, list) {
    if (node.left) {
        traverseInorder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInorder(node.right, list);
    }
    return list;
}

function traversePostorder(node, list) {
    if (node.left) {
        traversePostorder(node.left, list);
    }
    if (node.right) {
        traversePostorder(node.right, list);
    }
    list.push(node.value);
    return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);

tree.breathFirstSearch();
console.log("------------BREAK--------------");
tree.breathFirstSearchR([tree.root], []);
console.log("------------BREAK--------------");
console.log("Inorder - ", tree.DFSInorder());
console.log("Preorder - ", tree.DFSPreorder());
console.log("Postorder - ", tree.DFSPostorder());