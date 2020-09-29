// Finding a Node in a Binary Search Tree
//  - Starting at the root
//      - Check if there is a root, if not - we're done searching!
//      - If there is a root, check if the value of the new node is the value we are looking for
//          - If we found it, we're done!
//      - If not, check to see if the value is greater than or less than the value of the root
//      - if it is greater than:
//          - Check to see if there is a node to the right
//              - If there is, move to that node and repeat these steps.
//              - If there is not, we're done searching!
//      - if it is less than:
//          - Check to see if there is a node to the left
//              - If there is, move to that node and repeat these steps.
//              - If there is not, we're done searching!
/// Time complexity: O (log n )

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
          find (value){
              if (this.root === null) return false;
              let current = this.root
              found = false
              while(current && !found){
                  if( value < current.value){
                      current = current.left
                  } else if (value > current.value){
                      current = current.right
                  } else {
                      found = true
                  }
              }
              if(!found) return undefined
              return current 
        }
      }
      }
    }
  }
  