// How to add a new node with insert property
// Inserting a Node - Iteratively or Recursively
//     - Create a new node
//     - Starting at the root
//         - Check if there is root, if not - the root now becomes that new node.
//         - If there is a root, check if the value of the new node is greater than or less than the value of the root
//         - If it is greater:
//            - Check to see if there is a node to the right
//                - If there is, move to that node and repeat these steps.
//                - If there is not, add that node as the right property.
//         - If it is less:
//            - Check to see if there is a node to the left
//                - If there is, move to that node and repeat these steps.
//                - If there is not, add that node as the left property.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          //left side
          if ((current.left = null)) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
          //right side
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
