function searchSmaller(arr, target) {
    let l = 0, r = arr.length-1;
    while(l < r) {
        const mid = Math.floor((l+r) / 2);
        if (arr[mid] >= target) {
            r = mid-1;
       } else {
            if (arr[mid+1] >= target) return mid;
            l = mid+1;
        }
    }
    if (arr[l] >= target) return -1;
    return l;
}

console.log(searchSmaller([1,2,5,6,7,8], 1))