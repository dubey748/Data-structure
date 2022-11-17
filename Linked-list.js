class linkedList {
  constructor(value) {
    this.head = {
      val: value,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      val: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  traversing() {
    let count = 1;
    let currentNode = this.head;
    while (count < this.size) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
      count++;
    }

    /* let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
      
    } */
  }

  deleteNode(index) {
    let count = 1;
    let leadNode = this.head;
    if (index == 1) {
      this.head = this.head.next;
    } else {
      while (count < index) {
        leadNode = leadNode.next;
        count++;
      }
      let mergeAbleNode = leadNode.next.next;
      leadNode.next = mergeAbleNode;
      this.size--;
    }
  }

  insertAnyPlace(index, val) {
    let count = 1;
    let currentNode = this.head;
    while (count > index) {
      count++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      val: val,
      next: nextNode,
    };
    this.size++;
  }
  searchNode(val) {
    let result = undefined;
    let leadNode = this.head;
    let count = true;
    if (leadNode.val == val) {
      console.log(leadNode);
    } else {
      while (count) {
        leadNode = leadNode.next;
        count = !!leadNode;

        // for check if it not in list it convert undefined to false, it is converting in boliean
        if (count && leadNode.val === val) {
          count = false;
          result = leadNode;
        }
      }
      console.log(result);
    }
  }
}

let list = new linkedList(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.searchNode(200);

//list.insertAnyPlace(2, "Added");

//list.deleteNode(3);
//console.log(list)

//list.traversing();
