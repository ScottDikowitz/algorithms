function quickSort(arr) {
    function helper(left, right) {
        if (left < right) {
            const pivot =  partition(arr, left, right);
            helper(left, pivot-1);
            helper(pivot+1, right);
        }
        return arr;
    }
    return helper(0, arr.length-1);
}

// function partition(arr, left, right) {
//     const pivot = arr[Math.floor((left + right)  / 2)];
//     while (left <= right) {
//         while (arr[left] < pivot) {
//             left++;
//         }
//         while (arr[right] > pivot) {
//             right--;
//         }
//         let tempR = arr[right];
//         arr[right] = arr[left];
//         arr[left] = tempR;
//         left++;
//         right--;
//     }
//     return left;
// }
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

// console.log(quickSort([3,2,3,1,2,4,5,5,6]))


console.log(quickSort([9,1,2,8,4,5,11,21,4,2,55,15]))