function walkSteps(stepsLeft, offset=0, memo=null) {
    if (!memo) memo = Array.from(Array(stepsLeft+1), () => Array(stepsLeft+1).fill(null));
    if (offset < 0) return 0;
    if (memo[stepsLeft][offset] != null) return memo[stepsLeft][offset];
    if (offset === 0 && stepsLeft === 0) {
        return 1;
    } else if (stepsLeft === 0) {
        return 0;
    } else {
        memo[stepsLeft][offset] = walkSteps(stepsLeft-1, offset, memo) + walkSteps(stepsLeft-1, offset+1, memo) + walkSteps(stepsLeft-1, offset-1, memo)
        return memo[stepsLeft][offset];
    }
}

console.log(walkSteps(500));
