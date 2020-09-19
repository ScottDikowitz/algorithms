var longestDupSubstring = function(S) {
    let minLen = 1;
    let maxLen = S.length-1;
    let longestStr = '';
    while (minLen < maxLen) {
        const len = mi = Math.min((minLen + maxLen + 1) / 2);
        const res = findDuplicates(S, len);
        if (res) {
            longestStr = res;
            minLen = len;
        } else {
            maxLen = len-1;
        }
    }
    
    return longestStr;
};

function findDuplicates(S, len) {
    const set = new Set();
    for (let i = 0; i < S.length - (len - 1); i++) {
        const str = S.substring(i, i+len);
        if (set.has(str)) {
            return str;
        }
        set.add(str);
    }
    return false;
}


console.log(longestDupSubstring('banana'))
