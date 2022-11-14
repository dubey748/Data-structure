const search = (arr, start, end) => {
  mid = Math.floor((start + end) / 2);

  if (find === arr[mid]) {
    position = mid;
    return true;
  } else if (start === end) {
   return position="Not found";
  } else if (find > arr[mid]) {
    search(arr, mid + 1, end);
  } else {
    search(arr, start, mid - 1);
  }
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let start = 0;
let end = arr.length - 1;
let find = 17;
position = undefined;
search(arr, start, end);
console.log(position);
