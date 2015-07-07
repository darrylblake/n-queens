/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var result = [];

  // solution.set(1,1);
  // solution.set(2,1);
  // solution.set(3,1);
  // console.log(solution);

  function recursive(board, row, col, pieces) {
    // Looping through rows
    for (var i = row; i < n; i++) {
      // Looping through columns
      for (var j = col; j < n; j++) {
        // 
        board.togglePiece(i,j);
        pieces++;
        if (!board.hasRowConflictAt(i) && !board.hasColConflictAt(j)) {
          // Base Case
          if (pieces === n) {
            return board;
          }
          // Recursive Case
          return recursive(board, i+1, j+1, pieces);
        } else {
          // Removing the piece that causes a conflict
          board.togglePiece(i,j);
          pieces--;
        }
      }
    }
  }

  recursive(solution, 0, 0, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
