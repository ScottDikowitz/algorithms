/*
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:

You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
Example:

Input: [3,1,5,8]
Output: 167
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/

// slow!
// function maxCoins(nums) {
//     let maxVal = 0;
//       function helper(subarr, curMax = 0) {
//           if (subarr.length == 0) {
//               maxVal = Math.max(maxVal, curMax);
//           } else {
//               for(let i = 0; i < subarr.length; i++) {
//                   let left = i == 0 ? 1 : subarr[i-1];
//                   let mid = subarr[i];
//                   let right = i == subarr.length - 1 ? 1 : subarr[i+1];
//                   helper(subarr.slice(0, i).concat(subarr.slice(i+1)), curMax+(left * mid * right));
//               }
//           }
//       }
//       helper(nums);
//       return maxVal;
// }

function maxCoins(nums) {
    const len = nums.length  + 2;
    const newNums = Array(nums);
    for(let i = 0; i < nums.length; i++) {
      newNums[i+1] = nums[i];
    }
    newNums[0] = newNums[len-1] = 1;
    // builds copy array with two extra places - 1 at beginning and 1 at end.
    // return newNums;
    const memo = [];
    for (let i = 0; i < len; i++) {
      memo.push(Array(len).fill(null));
    }
    // return memo;
    return dp(memo, newNums, 0, len-1);
}

function dp(memo, nums, left, right) {
  if (left + 1 == right) return 0;
  if (memo[left][right] != null) return memo[left][right];
  let ans = 0;
  for (let i = left + 1; i < right; i++) {
    ans = Math.max(ans, (nums[left] * nums[i] * nums[right]) + dp(memo, nums, left, i) + dp(memo, nums, i, right));
    console.log(`${dp(memo, nums, left, i)} + (${nums[left]} * ${nums[i]} * ${nums[right]}) + ${dp(memo, nums, i, right)} ${left}:${right}`)
  }
  memo[left][right] = ans;
  return ans;
}


// console.log(maxCoins([3,1,5,8]));
console.log(maxCoins([2,3]));
