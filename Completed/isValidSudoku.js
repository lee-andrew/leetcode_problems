/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var rows = {};
    var columns = {};
    var squares = {};
    
    for ( var i = 0; i < 9; i++ ) {
        for ( var j = 0; j < 9; j++ ) {
            if ( board[i][j] !== "." ) {
                if ( !(board[i][j] in columns) ) {      // Check columns
                    columns[board[i][j]] = true;
                }
                else {
                    return false;
                }
            }
            
            if ( board[j][i] !== "." ) {
                if ( !(board[j][i] in rows) ) {          // Check rows
                    rows[board[j][i]] = true;
                }
                else {
                    return false;
                }
            }

            if ( i % 3 === 0 && j % 3 === 0 ) {         // check square
                for ( var m = i; m < i + 3; m++ ) {
                    for ( var n = j; n < j + 3; n++ ) {
                        if ( board[m][n] !== "." ) {
                            if ( !(board[m][n] in squares) ) {
                                squares[board[m][n]] = true;
                            }
                            else {
                                return false;
                            }
                        }
                    }
                }
                squares = {};
            }
            
            if ( j == 8 ) {
                columns = {};
                rows = {};
            }   
            

        }
    }

    return true;
};

var board = [];
while ( board.push([]) < 9 );
// column #1
board[0][0] = 5;
board[0][1] = 6;
board[0][3] = 8;
board[0][4] = 4;
board[0][5] = 7;
// column #2
board[1][0] = 3;
board[1][2] = 9;
board[1][6] = 6;
// column #3
board[2][2] = 8;
// column #4
board[3][1] = 1;
board[3][4] = 8;
board[3][7] = 4;
// column #5
board[4][0] = 7;
board[4][1] = 9;
board[4][3] = 6;
board[4][5] = 2;
board[4][7] = 1;
board[4][8] = 8;
// column #6
board[5][1] = 5;
board[5][4] = 3;
board[5][7] = 9;
// column #7
board[6][6] = 2;
// column #8
board[7][2] = 6;
board[7][6] = 8;
board[7][8] = 7;
// column #9
board[8][3] = 3;
board[8][4] = 1;
board[8][5] = 6;
board[8][7] = 5;
board[8][8] = 9;

for ( var i = 0; i < 9; i++ ) {
    for ( var j = 0; j < 9; j++ ) {
        if( board[i][j] == null) {
            board[i][j] = ".";
        }
    }
}

console.log(board)
console.log(isValidSudoku(board));