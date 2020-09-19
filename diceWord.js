// Given a word of length n and n six-sided dice with a character in each side. Find out if this word can be constructed by the set of given dice.

// Example 1:

// Input:
// word = "hello"
// dice = [[a, l, c, d, e, f], [a, b, c, d, e, f], [a, b, c, h, e, f], [a, b, c, d, o, f], [a, b, c, l, e, f]]
// Output: true
// Explanation: dice[2][3] + dice[1][4] + dice[0][1] + dice[4][3] + dice[3][4]
// Example 2:

// Input:
// word = "hello"
// dice = [[a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d, e, f], [a, b, c, d, e, f]]
// Output: false
// Example 3:

// Input:
// word = "aaaa"
// dice = [[a, a, a, a, a, a], [b, b, b, b, b, b], [a, b, c, d, e, f], [a, b, c, d, e, f]]
// Output: false


// function diceWord(dice, word) {
//     function helper(used=new Set(), i=0) {
//         if (i === word.length) return true;
//         for(let j = 0; j < dice.length; j++) {
//             if (!used.has(j) && dice[j].includes(word.charAt(i))) {
//                 used.add(j);
//                 if (helper(used, i+1)) return true;
//                 used.delete(j);
//             }
//         }
//         return false;
//     }
//     return helper();
// }

function diceWord(dice, word) {
    const wordSet = new Set(word);
    const trimmedDice = [];
    for(let i = 0; i < dice.length; i++) {
        const newDice = new Set();
        for(let j = 0; j < dice[i].length; j++) {
            if (wordSet.has(dice[i][j])) {
                newDice.add(dice[i][j]);
            }
        }
        if (newDice.size === 0) return false;
        trimmedDice.push(newDice)
    }
    const wordCharToDices = new Map();
    for(let i = 0; i < trimmedDice.length; i++) {
        trimmedDice[i].forEach((val) => {
            if (!wordCharToDices.has(val)) {
                wordCharToDices.set(val, [trimmedDice[i]]);
            } else {
                wordCharToDices.get(val).push(trimmedDice[i]);
            }
        });
    }
    function helper(i=0) {
        if (i === word.length) return true;
        const possibleDice = wordCharToDices.get(word.charAt(i));
        if (!possibleDice) return false; // do this elsewhere to save time
        for(let j = 0; j < possibleDice.length; j++) {
            const curDice = possibleDice[j];
            if (!curDice.has('used')) {
                curDice.add('used');
                if (helper(i+1)) return true;
                curDice.delete('used');
            }
        }
        return false;
    }
    return helper();
}

// console.log(
//     diceWord(
//         [['a', 'l', 'c', 'o', 'e', 'f'],
//         ['a', 'l', 'c', 'n', 'e', 'f'],
//         ['a', 'b', 'c', 'h', 'e', 'f'],
//         ['a', 'l', 'd', 'm', 's', 'f'],
//         ['a', 'b', 'c', 'l', 'e', 'f']],
//         'hello'
//     )
// )

// console.log(
//     diceWord([['a','b','c','d','e','f'],['x','y','z','a','h','g'],['c','m','n','o','p','q']], 'abc')
// ) // true
// console.log(diceWord([['a', 'l', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'h', 'e', 'f'], ['a', 'b', 'c', 'd', 'o', 'f'], ['a', 'b', 'c', 'l', 'e', 'f']], 'hello')) // true
console.log(diceWord([['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f']], 'hello')) // false


console.log(
    diceWord(
        [['a', 'l', 'c', 'o', 'e', 'f'],
        ['a', 'b', 'c', 'n', 'e', 'f'],
        ['a', 'b', 'c', 'h', 'e', 'f'],
        ['a', 'b', 'd', 'm', 's', 'f'],
        ['a', 'b', 'c', 'l', 'e', 'f'],
        ['a', 'b', 'c', 'l', 'e', 'f'],
        ['a', 'b', 'c', 'l', 'e', 'f'],
        ['a', 't', 'c', 'l', 'e', 'f']],
        'leetcode'
    )
)
