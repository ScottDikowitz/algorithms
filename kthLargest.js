function kthLargest(arr, k) {
    function helper(left, right) {
        if (left < right) {
            const pivot =  partition(arr, left, right);
            const nLargest = arr.length - pivot;
            if (k === nLargest) {
                return arr[pivot];
            } else if (nLargest > k) {
                return helper(pivot+1, right);
            } else {
                return helper(left, pivot-1);
            }
        }
    }
    return helper(0, arr.length-1);
}
[1,2,3]
function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left-1;
    for(let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    i++;
    arr[right] = arr[i];
    arr[i] = pivot;
    return i;
}

console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4));
// output: 4

console.log(kthLargest([3,2,1,5,6,4], 2));
// output: 5