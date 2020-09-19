/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function backtrack (row=0, column=0, B) {
        if (row > board.length - 1) {
            return true;
        }
        if (column > board.length - 1) {
            return backtrack(row+1, 0, B);
        }
        if (B[row][column] != '.') {
            return backtrack(row,column+1, B);
        }
        const possibleMoves = getPossibleMoves(row, column, B);
        for (let i = 0; i < possibleMoves.length; i++) {
            B[row][column] = possibleMoves[i];
            if (backtrack(row,column+1, B)) return true;
        }
        B[row][column] = '.';
    }
    return backtrack(0,0,board);
};

function getPossibleMoves(row, column, board) {
    const pool = new Set(['1','2','3','4','5','6','7','8','9']);
    board[row].forEach(cell => {
        if (pool.has(cell)) pool.delete(cell);
    })
    for (let i = 0; i < board.length; i++) {
        if (pool.has(board[i][column])) pool.delete(board[i][column]);
    }
    let startRow = Math.floor(row/3)*3;
    const endRow = startRow+3;
    let startColumn = Math.floor(column/3)*3;
    const endColumn = startColumn+3;
    for (let j = startRow; j < endRow; j++) {
        for (let k = startColumn; k < endColumn; k++) {
            if (pool.has(board[j][k])) pool.delete(board[j][k]);
        }
    }
    return Array.from(pool);
}

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(solveSudoku(board));
console.log(board);
