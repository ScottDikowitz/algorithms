









function solveNQueens (n) {
    const board = Array.from(Array(n), ()=>Array(n).fill(null));
    const fboards = [];
    const diagnalDec = new Set();
    const diagnalInc = new Set();
    const xvals = new Set();
    const yvals = new Set();
    function isValidPlacement (x,y) {
        if (xvals.has(x)) {
            return false;
        }
        if (yvals.has(y)) {
            return false;
        }
        if (diagnalInc.has(x+y) || diagnalDec.has(x-y)) {
            return false;
        }
        return true;
    }
    function helper(y=0, placements=0) {
        if (y >= n) {
            const fboard = [];
            board.forEach(row => {
                let frow = '';
                row.forEach(col => {
                    frow += col ? 'Q' : '.';
                });
                fboard.push(frow);
            });
            fboards.push(fboard);
            return;
        }
        for(let x = 0; x < n; x++) {
            if (isValidPlacement(x,y)) {
                board[x][y] = true;
                diagnalDec.add(x-y);
                diagnalInc.add(x+y);
                xvals.add(x);
                yvals.add(y);
                helper(y+1, placements+1);
                xvals.delete(x);
                yvals.delete(y);
                diagnalDec.delete(x-y);
                diagnalInc.delete(x+y);
                board[x][y] = null;
            }
        }
    }
    helper();
    return fboards;
}

console.log(solveNQueens(4));
