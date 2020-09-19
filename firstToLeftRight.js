function firstToLeft(arr, target) {
    if (target < arr[0]) return null;
    if (target > arr[arr.length-1]) return arr.length-1;
    let l = 0, r = arr.length-1
    while(l <= r) {
        const mid = Math.floor((r+l) / 2);
        if (arr[mid] < target) {
            l = mid+1;
        } else if (arr[mid] >= target) {
            r = mid-1;
        } else {
            return -1;
        }
    }
    if (arr[r] < target) return r;
    if (arr[l] < target) return l;
	return null;
}

// [40, 50], 52

function firstToRight(arr, target) {
    if (target < arr[0]) return 0;
    if (target > arr[arr.length-1]) return null;
    let l = 0, r = arr.length-1
    while(l <= r) {
        const mid = Math.floor((r+l) / 2);
        if (arr[mid] <= target) {
            l = mid+1;
        } else if (arr[mid] > target) {
            r = mid-1;
        } else {
            return -1;
        }
    }
    if (target < arr[l]) return l;
    if (target < arr[r]) return r;
	return null;
}

// 40, 50], 42

let arr = [2,5,8, 10,18,24,31]
// let arr = [1, 8]
console.log(firstToRight(arr, 26))



function findClosest(arr, target) {
    if (target < arr[0]) return 0;
    if (target > arr[arr.length-1]) return arr.length-1;
    let l = 0, r = arr.length-1;
    while(l <= r) {
        const mid = Math.floor((r+l) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            l = mid+1;
        } else if (arr[mid] > target) {
            r = mid-1;
        }
    }
    const distLo = Math.abs(target - arr[l]);
    const distRi = Math.abs(target - arr[r]);
    return distLo <= distRi ? l : r;
}

// [8, 14], 7

function find(arr, target) {
    let l = 0, r = arr.length-1;
    while(l < r) {
        const mid = Math.floor((r+l) / 2);
        if (arr[mid] < target) {
            l = mid+1;
        } else if (arr[mid] > target) {
            r = mid-1;
        } else {
            return mid;
        }
    }
    return arr[l] === target ? l : -1;
}

// console.log(firstToLeft([40,50], 52))
// let arr = [2,5,8, 10,18,24,31]
// let arr = [0,3]
// console.log(findClosest(arr, 1))
