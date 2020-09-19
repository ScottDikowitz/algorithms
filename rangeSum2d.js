function rangeSum(arr) {
    const rowSums = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        rowSums.push(sum);
        sum+= arr[i];
    }
    return rowSums;
}

console.log(rangeSum([1,2,5,2,3,9]))
