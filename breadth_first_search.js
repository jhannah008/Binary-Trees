// BFS Steps
//  - Steps: Iteratively
//      - Create a queue (this can be an array) and a variable to store the values of nodes visited.
//      - Place the root node in the queue
//      - Loop as long as there is anything in the queue (FIFO)
//          - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//          - If there is a left property on the node dequeded - add it to the queue
//          - If there is a right property on the node dequeued - add it to the queue
//      - Return the variable that stores the values.

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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.BreadthFirstSearch();
