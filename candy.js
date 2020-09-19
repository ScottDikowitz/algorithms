// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:

// Input: [1,0,2]
// [1,1,2]
// 1,1
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.
// Input: [1,2,2]
// 1234567
// 1 2 1
// 1,2,3,3,3,1
// 1,2,3,2,2,1

// 1,2,3,2,2,1
function candy(ratings) {
    if (ratings.length === 0) return 0;
    const distributions = [1];
    for(let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            // increasing
            distributions.push(distributions[distributions.length-1]+1);
        } else if (ratings[i] < ratings[i-1]) {
            // decreasing
            distributions.push(1);
            let j = i-1;
            while(j >= 0 && ratings[j] > ratings[j+1] && distributions[j] <= distributions[j+1]) {
                distributions[j]++;
                j--;
            }
        } else {
            // same
            distributions.push(1);
        }
    }
    return distributions.reduce((accum, val)=> accum+val, 0);
}

console.log(candy([2,1])) // output: 3
console.log(candy([1,0,2])) // output: 5
console.log(candy([1,2,2])) // output: 4
console.log(candy([1,2,3,4,5,6,7])) // output: 28
console.log(candy([7,6,5,4,3,2,1]))
console.log(candy([1,2,3,3,3,1]))
// 3,2,1


// {
//     a: [0,1,2,3,4],
//     l: [0,4],
//     c: [0,1,2,3,4],
//     d: [0,1,3],
//     e: [0,1,2,4],
//     f: [0,1,2,3,4],
//     b: [1,2,3,4],
// }
// c -> a
// a -> t
// c -> t
// {
//     c: ['a'],
//     a: ['t'],
//     c: ['t'],
//     t: []
// }

c
