function permutations(str, start=0) {
    if (start == str.length - 1) {
        return [str];
    }
    let arr = [];
    for (let i = start; i < str.length; i++){
        const char = str.charAt(i);
        const newStr = char + str.substring(0, i) + str.substring(i+1);
        arr = arr.concat(permutations(newStr, start + 1));
    }
    return arr;
}

module.exports = permutations;

console.log(permutations('abcd').length);
