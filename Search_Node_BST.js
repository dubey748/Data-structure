class Node {
  constructor(val) {
    (this.val = val), (this.left = null), (this.right = null);
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isTreeEmpty() {
    return this.root === null;
  }

  makeTree(val) {
    let newNode = new Node(val);
    if (this.isTreeEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.val > newNode.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, val) {
    if (root === null) {
      return false;
    } else if (root.val === val) {
      return true;
    } else if (root.val > val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }
}
let bst = new BST();
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(3);
bst.makeTree(8);
bst.makeTree(25);
bst.makeTree(15);
bst.makeTree(28);
console.log(bst.search(bst.root, 5));

//console.log(bst);
//console.log(bst.isTreeEmpty());
