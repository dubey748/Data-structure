const BinarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length;
  do {
    const mid = Math.floor(low + (high - low) / 2);
    const niddle = arr[mid]
    if (niddle === val) {
      return true;
    }
    else if (niddle > val) {
      high = mid
    }
    else {
      low = mid + 1
    }
  } while (low < high);


  return false;

}
console.log(BinarySearch([1, 2, 3, 4, 5], -10))