function nextPermutation(nums) {
    let modIndex = null;
    let modVal = null;
    let i = 0;
    while (i < nums.length) {
        if (nums[i+1] > nums[i]) {
            modIndex = i;
            modVal = nums[i]
        }
        i++;
    }
    if (modVal == null) {
        for (let i = 0; i < nums.length / 2; i++) {
            const backCopy = nums[(nums.length - 1) - i];
            nums[(nums.length - 1) - i] = nums[i];
            nums[i] = backCopy;
        }
        return;
    }
    let nextGreatest = null;
    let swapIndex = null;
    for (let i = modIndex + 1; i < nums.length; i++) {
        if (nextGreatest == null || (nums[i] >= modVal && nums[i] < nextGreatest)) {
            swapIndex = i;
            nextGreatest = nums[i]
        }
    }
    nums[modIndex] = nums[swapIndex];
    nums[swapIndex] = modVal;
    const reversed = nums.slice(modIndex + 1).reverse();
    let reversedIdx = 0;
    for (let i = modIndex + 1; i < nums.length; i++) {
        nums[i] = reversed[reversedIdx]
        reversedIdx += 1;
    }
}
const nums = [1,2,3,4];
nextPermutation(nums)
console.log(nums)
