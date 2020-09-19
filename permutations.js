function permutations (str = '') {
    const res = [];

    function driver(str, res, curStr, totalLength) {
        if (curStr.length == totalLength) {
            res.push(curStr);
            return;
        }
        // const strArr = str.split('');
        str.forEach((char, i) => {
            let newArr = str.slice();
            newArr.splice(i, 1);
            driver(newArr, res, curStr + char, totalLength);
        })
    }
    driver(str.split(''), res, '', str.length);
    return res;
}

console.log(permutations('boat'));
