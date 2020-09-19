var longestPalindrome = function(s) {
    longestPal = '';
    for (let i = 0; i < s.length; i++) {
        const str1 = expandAroundCenter(s, i, i);
        const str2 = expandAroundCenter(s, i, i-1);
        const longestExpand = str1.length > str2.length ? str1 : str2;
        longestPal = longestExpand.length > longestPal.length ? longestExpand : longestPal;
    }
    return longestPal;
};

function expandAroundCenter(s, left, right) {
    if (s.charAt(left) != s.charAt(right)) {
        return '';
    }
    while(true) {
        if (s.charAt(left-1)=='' || s.charAt(right+1)=='' || s.charAt(left-1) != s.charAt(right+1)) {
            return s.substring(left, right+1);
        } else {
           left--;
           right++;
        }
    }
}

const string = process.argv[2] || '';
const left = parseInt(process.argv[3]) || 0;
const right = parseInt(process.argv[4]) || 0;
console.log(expandAroundCenter(string, left, right))
