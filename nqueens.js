function nqueens(n) {
    function isValid(row, col, queens) {
        for (let i = 0; i < queens.length; i++) {
            if (row == queens[i][0] || col == queens[i][1]) {
              return false;
            }
            if ((row + col) == queens[i][0] + queens[i][1]) {
                return false;
            }
            if (queens[i][0] - queens[i][1] == row - col) {
                return false;
            }
        }
        return true;
    }
    function solver(rowNum, queens=[], results=[]) {
        if (rowNum == n) {
            results.push(queens);
            return queens;
        }
        for (let i = 0; i < n; i++) {
            if (isValid(rowNum, i, queens)) {
                solver(rowNum+1, [...queens, [rowNum, i]], results);
            }
        }
        return results;
    }
    return solver(0);
}
