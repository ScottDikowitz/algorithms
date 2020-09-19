// function kthLargest (q, k) {
//     let l = 0;
//     let r = q.length-1;
//     while(l < r) {
//         const mid = Math.floor((l+r) / 2);
//         const pivotVal = q[mid][1];
//         swap(q, mid, r);
//         let rightP = r-1;
//         for(let i = l; i < rightP; i++) {
//             if (q[i][1] > pivotVal) {
//                 swap(q, i, rightP--);
//             }
//         }
//         swap(q, rightP, r)
//         if (rightP == k) {
//             return q.slice(0, k).map(a => a[0]);
//         } else if (rightP < k) {
//             l = rightP+1;
//         } else {
//             r = rightP;
//         }
//     }
//     return q.slice(0, l).map(a => a[0]);
//     // return l;
    
// };
var topKFrequent = function(nums, k) {
    const counts = {};
    for(let i = 0; i < nums.length; i++) {
        if (counts[nums[i]]) {
            counts[nums[i]]++;
        } else {
            counts[nums[i]] = 1;
        }
    }
    const q = [];
    for (let key in counts) {
        q.push([parseInt(key), counts[key]]);
    }
    return kthLargest(q, k);
};

function swap(arr, a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function kthLargest(arr, k) {
    function helper(left, right) {
        if (left < right) {
            const pivot =  partition(arr, left, right);
            const nLargest = arr.length - pivot;
            if (k === nLargest) {
                return arr.slice(pivot).map(a => a[0]);
            } else if (nLargest > k) {
                return helper(pivot+1, right);
            } else {
                return helper(left, pivot-1);
            }
        }
        return arr.slice(left).map(a => a[0]);
    }
    return helper(0, arr.length-1);
}
function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left-1;
    for(let j = left; j < right; j++) {
        if (arr[j][1] <= pivot[1]) {
            i++;
            swap(arr, i, j);
        }
    }
    i++;
    arr[right] = arr[i];
    arr[i] = pivot;
    return i;
}

function swap(arr, a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}





console.log(topKFrequent([1,1,1,2,2,3], 2));