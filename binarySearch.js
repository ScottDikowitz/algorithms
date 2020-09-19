function binarySearch(arr, target, start=null, end=null) {
    function recurse(left, right) {
        if (left>right) return -1;
        const mid = Math.floor((right+left) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (target > arr[mid]) {
            return recurse(mid+1, right);
        } else {
            return recurse(left, mid-1);
        }
    }
    if (start!=null && end!=null) {
        console.log(arr, target, start, end)
        return recurse(start,end);
    }
    return recurse(0, arr.length-1);
}

// console.log(binarySearch([1,2,5,10,15,21,29], 15))
module.exports = binarySearch;
