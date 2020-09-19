/*
Write a function called solution(s) that, given a non-empty string less than 200 characters in length describing the sequence of M&Ms, returns the maximum number of equal parts that can be cut from the cake without leaving any leftovers.

Languages
=========

To provide a Python solution, edit solution.py
To provide a Java solution, edit Solution.java

Test cases
==========
Your code should pass the following test cases.
Note that it may also be run against hidden test cases not shown here.

-- Python cases --
Input:
solution.solution("abcabcabcabc")
Output:
    4

Input:
solution.solution("abccbaabccba")
Output:
    2
*/

function maxParts (str) {
    let len = 1;
    while (len < Math.floor((str.length / 2)) + 1) {
        const p = str.substring(0, len);
        let good = true;
        for(let i = len; i < str.length; i+=len) {
            for(let j = 0; j < len; j++) {
                if (p.charAt(j) != str.charAt(i+j)) {
                    good = false; break;
                }
            }
            if (good == false) break;
        }
        if (good) return str.length / len;
        len++;
    }
    return -1;
}

console.log(maxParts("abccbaabccba"))
// console.log(maxParts("aaaaa"))