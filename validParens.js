function validParens(s) {
    let d = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            d++;
        } else if (s[i] === ')') {
            d--;
            if (d < 0) return false;
        }
    }
    return d === 0;
}

console.log(validParens(
    '()()'
));