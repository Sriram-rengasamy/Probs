/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rookRow = -1, rookCol = -1;
    let pawnCapture = 0;
    for(let row = 0; row < board.length; row++)
        {
            for(let col = 0; col < board[0].length; col++)
                {
                    if(board[row][col] === 'R'){
                     rookRow = row;
                     rookCol = col;
                    }
                }
        }
    let row = rookRow - 1; col = rookCol;
    while(row >= 0 && board[row][col] !== 'B')
    {
       if(board[row][col] === 'p')
         { 
         pawnCapture++; 
             break;
         }  
        row--;
    }
    
    row = rookRow + 1; col = rookCol;
    while(row < board.length && board[row][col] !== 'B')
    {
       if(board[row][col] === 'p')
          { pawnCapture++; break; } 
        row++;
    }
    
    row = rookRow; col = rookCol + 1;
    while(col < board.length && board[row][col] !== 'B')
    {
       if(board[row][col] === 'p')
           { pawnCapture++; break; } 
        col++;
    }
    
    row = rookRow; col = rookCol - 1;
    while(col >= 0 && board[row][col] !== 'B')
    {
       if(board[row][col] === 'p')
           { pawnCapture++; break; } 
        col--;
    }    
   return pawnCapture;
    
};

var board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]];

var result = numRookCaptures(board);
result;