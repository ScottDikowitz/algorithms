var shipWithinDays = function(weights, D) {
    const dp = Array.from(Array(weights.length), () => Array(D-1));
    function helper(i=0, splits = D - 1) {
        if (splits < 0) return Infinity;
        
        if (dp[i][splits] != null) {
            return dp[i][splits];
        }
        if (i == weights.length-1) return weights[weights.length-1];
        let windowSum = 0;
        let minMax = Infinity;
        for(let j = i; j < weights.length-1; j++) {
            windowSum += weights[j];
            console.log(windowSum)
            const max = Math.max(windowSum, helper(j+1, splits-1));
            minMax = Math.min(max, minMax);
        }
        dp[i][splits] = minMax;
        return minMax;
    }
    return helper();
};

console.log(shipWithinDays([3,2,2,4,1,4], 3))