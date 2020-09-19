findRotateIndex = require('./rotateIndex');
binarySearch = require('./binarySearch');

function search (nums, target) {
    if (nums.length == 0) return -1;
    if (nums.length == 1) {
        return nums[0] === target;
    }
    const rotateIndex = findRotateIndex(nums);
    if (rotateIndex == 0) return binarySearch(nums, target);
    if (nums[rotateIndex] === target) return rotateIndex;
    if (target >= nums[0]) return binarySearch(nums, target, 0, rotateIndex-1);
    return binarySearch(nums, target, rotateIndex+1, nums.length-1);
}

console.log(search([20, 21, 30,5,6,8,15], 20))
