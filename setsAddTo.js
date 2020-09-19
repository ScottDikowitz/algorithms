function setsAddTo(arr, target, index) {
    console.log(index)
    if (target < 0) {
        return 0;
    }
    if (target == 0) {
      return 1;
    }
    if (index < 0) {
      return 0;
    }
    if (arr[index] > target) {
        return setsAddTo(arr, target, index-1);
    } else {
        return setsAddTo(arr, target - arr[index], index-1) + setsAddTo(arr, target, index-1);
    }
}

console.log(setsAddTo([2,4,6,10], 16, 3));
