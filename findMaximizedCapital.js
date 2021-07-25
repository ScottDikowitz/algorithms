const MaxPriorityQueue = require('./maxPriorityQueue');

var findMaximizedCapital = function(k, w, profits, capital) {
    const map = {}
    for(let i = 0; i < capital.length; i++) {
        if (map[capital[i]] == null) map[capital[i]] = new MaxPriorityQueue({priority: a => a});
        map[capital[i]].enqueue(profits[i]);
    }
    const mmpq = new MaxPriorityQueue({priority: a => a[1].front().element});
    const g = Object.keys(map).sort((a,b) => a-b).map(k => {
        return [k, map[k]];
    });
    let j = null;
    for(let i = 0; i < g.length && g[i][0] <= w; i++) {
        j = i+1;
        mmpq.enqueue(g[i]);
    }
    if (mmpq.size() === 0) return w;
    while(k > 0 && mmpq.size() > 0) {
        const ctop = mmpq.dequeue().element;
        const p = ctop[1].dequeue().element;
        w += p;
        if (ctop[1].size() > 0) {
            mmpq.enqueue(ctop);
        }
        while(j < g.length && g[j][0] <= w) {
            mmpq.enqueue(g[j++]);
        }
        k--;
    }
    return w;
};

console.log(findMaximizedCapital(
    2,
    0,
    [1,2,3],
    [0,1,1]
))