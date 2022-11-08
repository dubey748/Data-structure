const enqueue = (newVal) => {
  if (currentSize >= maxSize) return console.log("Waiting list");
  queue[currentSize] = newVal;
  currentSize++;
};
const dequeue = () => {
  if (!isEmpty()) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    console.log("Queue is empty");
  }
};

const front = () => {
  if (!isEmpty()) {
    console.log(queue[0]);
  } else {
    console.log("Queue is empty");
  }
};
const rear = () => {
  if (!isEmpty()) {
    console.log(queue[currentSize - 1]);
  } else {
    console.log("Queue is empty");
  }
};

const display = () => {
  console.log(queue);
};

const isEmpty=()=>{
  if(currentSize<=0){
    return true;
  }else{
    return false;
  }
}
let queue = [];
let currentSize = queue.length;
let maxSize = 5;
enqueue(10);
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)
front();
rear();
display();
