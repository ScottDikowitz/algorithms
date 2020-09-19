// var reorganizeString = function(S) {
//     const chars = {};
//     for (let i = 0; i < S.length; i++) {
//         if (!chars[S.charAt(i)]) {
//             chars[S.charAt(i)] = 1;
//         } else {
//             chars[S.charAt(i)]++;
//         }
//     }
//     function helper(exp='') {
//         if (exp.length === S.length) {
//             return exp;
//         } else {
//             for (let key in chars) {
//                 if (chars[key] > 0 && exp.charAt(exp.length-1) !== key) {
//                     chars[key]--;
//                     const val = helper(exp + key);
//                     if (val != null) return val;
//                     chars[key]++;
//                 }
//             }
//         }
//     }
//     return helper() || '';
// };
var reorganizeString = function(S) {
    const chars = {};
    let exp = '';
    for (let i = 0; i < S.length; i++) {
        if (!chars[S.charAt(i)]) {
            chars[S.charAt(i)] = 1;
        } else {
            chars[S.charAt(i)]++;
        }
    }
    const freqGroup = {};
    for (let key in chars) {
        if (!freqGroup[chars[key]]) {
            freqGroup[chars[key]] = [key]
        } else {
            freqGroup[chars[key]].push(key);
        }
    }
    const sorted = Object.entries(freqGroup).sort((a,b)=> {
        return b[0] - a[0];
    }).map(arr => arr[1])
    console.log(sorted)

    // const sorted = Object.values(chars).sort((a,b)=> b.count - a.count);
    // let i = 0;
    // let pos = 0;
    // while (sorted.length > 0) {
    //     const index = pos % sorted.length;
    //     if (sorted[index].char === exp.charAt(exp.length-1)) return '';
    //     exp += sorted[index].char;
    //     sorted[index].count--;
    //     if (sorted[index].count === 0) {
    //         sorted.splice(index, 1);
    //         // delete sorted[index];
    //     } else {
    //         i++;
    //         pos++;
    //     }
    // }
    // return exp;
}

console.log(reorganizeString('abcdlllefg'))