var trap = function(height) {
    let maxHeightLeft = 0;
    let heights = height.map(el => {
        let oldMaxHeight = maxHeightLeft;
        if (el > maxHeightLeft) maxHeightLeft = el;
        return {val: el, maxHeightLeft: oldMaxHeight};
    })
    maxHeightRight = 0;
    let bars = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        bars += Math.max(Math.min(heights[i].maxHeightLeft, maxHeightRight) - heights[i].val, 0);
        if (heights[i].val > maxHeightRight) maxHeightRight = heights[i].val;
    }
    return bars;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
