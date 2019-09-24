function numRookCaptures(board) {
    let N = 8;
    let DR = [-1, 0, +1, 0];
    let DC = [0, +1, 0, -1 ];
    let row = -1, col = -1;

    for (let r = 0; r < N; r++)
        for (let c = 0; c < N; c++)
            if (board[r][c] == 'R') {
                row = r;
                col = c;
            }

    let pawns = 0;

    for (let dir = 0; dir < 4; dir++) {
        let r = row, c = col;

        while (true) {
            r += DR[dir];
            c += DC[dir];

            if (r < 0 || r >= 8 || c < 0 || c >= 8)
                break;

            if (board[r][c] == 'B')
                break;

            if (board[r][c] == 'p') {
                pawns++;
                break;
            }
        }
    }

    return pawns;
}


var board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]];

var result = numRookCaptures(board);
result;