function findRotateIndex(arr) {
    let left = 0;
    let right = arr.length - 1;
    if (arr[left] < arr[right]) return 0;
    while (left <= right) {
        let pivot = Math.floor((right+left) / 2);
        if (arr[pivot] > arr[pivot+1]) {
            return pivot+1;
        } else {
            if (arr[pivot] < arr[left]) {
                right = pivot-1;
            } else {
                left = pivot+1;
            }
        }
    }
    return 0;
}

// console.log(findRotateIndex([5,6,1,2,3,4]));

module.exports = findRotateIndex;
