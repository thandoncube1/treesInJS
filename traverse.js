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

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);

tree.breathFirstSearch();