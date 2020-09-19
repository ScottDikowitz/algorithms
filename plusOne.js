/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = [];
    let i = digits.length - 1;
    let digit = digits[i] + 1;
    result.push(digit % 10)
    let carry = digit >= 10 ? 1 : 0;
    i--;
    while (i >= 0 || carry) {
        if (i >= 0) {
            digit = digits[i];
            result.unshift((digit + carry) % 10);
        } else {
            result.unshift(1);
            break;
        }
        carry = digit + carry >= 10 ? 1 : 0;
        i--;
    }
    return result;
};

console.log(plusOne([9,9,9,9]))
