function isLevelOrderTraversalOfBST(arr) {
    let i = 1;
    let lastLevel = [[arr[0], -Infinity, Infinity]];
    while(i < arr.length) {
        let thisLevel = [];
        let k = 0;
        let flag = false;
        while(k < lastLevel.length) {
            const head = lastLevel[k];
            if (head == null) {
                thisLevel.push(null,null);
                k++;
                continue;
            }
            const [node, min, max] = head;
            if (arr[i] < head[0] && arr[i] > min && arr[i] < max) {
                flag = true;
                thisLevel.push([arr[i], head[1], head[0]]);
                i++;
            } else {
                thisLevel.push(null);
            }

            if (arr[i] > head[0] && arr[i] > min && arr[i] < max) {
                flag = true;
                thisLevel.push([arr[i], head[0], head[2]]);
                i++;
            } else {
                thisLevel.push(null);
            }
            k++;
        }
        if (!flag) return false;
        lastLevel = thisLevel;
    }
    if (i === arr.length) return true;
    return false;
}

console.log(isLevelOrderTraversalOfBST(
    [7, 4, 12, 3, 6, 8, 1, 5, 10]
    // [4,5,2]
));