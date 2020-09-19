/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const T = [];
    for (let i = 0; i < s.length + 1; i++) {
        const row = [];
        for (let j = 0; j < p.length + 1; j++) {
            row.push(false);
        }
        T.push(row);
    }
    T[0][0] = true;
    for (let i = 1; i < T[0].length; i++) {
        const pattern = p.charAt(i-1);
        if (pattern == '*') {
            T[0][i] = T[0][i-2];
        }
    }
    for(let i = 1; i < T.length; i++) {
        const char = s.charAt(i-1);
        for(let j = 1; j < T[0].length; j++) {
            const pattern = p.charAt(j-1);
            if (pattern == char || pattern == '.') {
                T[i][j] = T[i-1][j-1];
            } else if (pattern == '*') {
                T[i][j] = T[i][j-2];
                if (char == p.charAt(j-2) || p.charAt(j-2) == '.') {
                    T[i][j] = T[i][j] || T[i-1][j];
                }
            } else {
                T[i][j] = false;
            }
        }
    }
    return T[T.length-1][T[0].length - 1];
};

module.exports = isMatch;