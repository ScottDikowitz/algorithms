function threesum(nums) {
    const result = [];
    nums.sort((a,b)=>a-b);
    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        const num1 = nums[i];
        let j = i + 1;
        let k = nums.length -1;
        while (j < k) {
            const sum = num1 + nums[j] + nums[k];
            if (sum == 0) {
                result.push([num1, nums[j], nums[k]]);
                j++;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
            } else if (sum < 0){
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
}

console.log(threesum([-1, 0, 1, 2, -1, -4]))
