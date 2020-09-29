// DFS InOrder
//  - Create a variable to store the values of nodes visited.
//  - Store the root of the Binary Search Tree in a variable called current
//  - Write a helper function which accepts a node
//      - If the node has a left property, call the helper function with the left property on the node
//      - Push the value of the node to the variable that stores the values
//      - If the node has a right property, call the helper function with the right property on the node
//      - Invoke the helper function with the current variables
//  - Return the array of value

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
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  BreadthFirstSearch() {
    let data = [];
    let queue = [];
    let node = this.root;
    // step 1: place root node in the queue
    queue.push(node.value);
    //step 2: dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    while (queue.length) {
      node = queue.shift();
      //step 3: check the left and the right
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(6);
tree.insert(15);
tree.DFSInOrder(); // [2,6,5,10,13,11,15]

//              10
//          5       13
//       2   6     11  15
