// array can be sorted with one swap. find those
function oneSwap(arr) {
    const indicies = [];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            if (indicies.length === 0) {
                indicies.push(i-1);
            } else {
                indicies.push(i);
            }
        }
    }
    if (indicies.length === 1) return [arr[indicies[0]], arr[indicies[0]+1]]
    return indicies.map(i => arr[i])
}

console.log(oneSwap([1,5,9,12,13,22,26,28,30,31]))
// console.log(oneSwap([1,9,5,12,13,22,26,28,30,31]))