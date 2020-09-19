// bfs approach
var ladderLength = function(beginWord, endWord, wordList) {
    const map = new Map();
    const len = wordList[0] ? wordList[0].length : 0;
    wordList.forEach(word => {
        for (let i = 0; i < len; i++) {
            const hash = word.substring(0, i) + '.' + word.substring(i+1);
            if (map.has(hash)){
                map.get(hash).push(word);
            } else {
                map.set(hash, [word])
            }
        }
    });
    const queue = [[beginWord, 1]];
    const seen = new Set();
    while (queue.length > 0) {
        const [word, index] = queue.shift();
        for (let i = 0; i < len; i++) {
            const hash = word.substring(0, i) + '.' + word.substring(i+1);
            if (map.has(hash)) {
                const arr = map.get(hash);
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] == endWord) return index+1;
                    if (!seen.has(arr[j])) {
                        seen.add(arr[j]);
                        queue.push([arr[j], index+1]);
                    }
                }
            }
        }
    }
    return 0;
}


// var ladderLength = function(beginWord, endWord, wordList) {
//     let ladder = null;
//     const memo = [];
//     function recurse(curladder, usedIndex = {}) {
//         if (curladder.length > 5) return;
//         if (ladder != null && curladder.length > ladder.length) {
//             return;
//         }
//         if (curladder[curladder.length - 1] == endWord && (ladder == null || curladder.length < ladder.length)) {
//             ladder = curladder.slice();
//         } else {
//             for (let i = 0; i < wordList.length; i++) {
//                 if (usedIndex[i] != null) continue;
//                 let lastWord = curladder[curladder.length - 1];
//                 let mismatches = 0;
//                 let hash = [lastWord, wordList[i]].sort();
//                 if (memo[hash] == null) {
//                     for (let j = 0; j < lastWord.length; j++) {
//                         if (lastWord[j] != wordList[i][j]) {
//                             mismatches++;
//                         }
//                     }
//                 } else {
//                     if (memo[hash] == true) {
//                       mismatches = 1;
//                     } else {
//                       mismatches = 0;
//                     }
//                 }
//                 if (mismatches == 1) {
//                     memo[hash] == true;
//                     curladder.push(wordList[i]);
//                     usedIndex[i] = true;
//                     recurse(curladder, usedIndex);
//                     curladder.pop();
//                     delete usedIndex[i];
//                 } else {
//                     memo[hash] = false;
//                 }
//             }
//         }
//     }
//     recurse([beginWord]);
//     return ladder ? ladder.length : 0;
// };


// console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))

// slow!
// console.log(ladderLength("qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))
// console.log(ladderLength("hit", "mop", ["hot","dot","dog","lot","log","cog", "mod", "mop", "hod"]))
// console.log(ladderLength("a", "c", ["a", "b", "c"]))
// console.log(ladderLength("hot", "dog", ["hot", "dog", "dot"]))
