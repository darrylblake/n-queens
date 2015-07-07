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





window.getNRooksSolution = function(board, pieces, n) {
  var results = [];
  function recurse(board, pieces, n) {
    if (pieces === n) {
      results.push(board.rows());
    }

    var newBoard = new Board({n: n});
    newBoard.set(board.rows().slice());

    for (var i = 0; i < n; i++) {

      for (var j = 0; j < n; j++) {

        if (!newBoard.get(i)[j]) { // If square doesn't have a piece already
          newBoard.togglePiece(i,j); // Setting the piece to then test
          pieces++;
          if (!newBoard.hasRowConflictAt(i) && !newBoard.hasColConflictAt(j)) {
            // Recursive Case
            console.log(JSON.stringify(newBoard.rows()))
            return recurse(newBoard, pieces, n);
          } else {
            // Removing the piece that causes a conflict
            newBoard.togglePiece(i,j);
            pieces--;
          }  
        }


      } // End j
    } // End i

  }

  recurse(board, pieces, n)
  return results;
}


window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  console.log(getNRooksSolution(solution, 0, n));
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var results = [];

  var recurse = function(board, row, col) {
    // Base case
    if (board.pieces === n) {
      results.push(board);
      return;
    }

    var copiedBoard = new Board({n: n});
    copiedBoard.set(board.rows());
    copiedBoard.pieces = board.pieces;
    

    for (var i = row; i < n; i++) { // Rows
      for (var j = col; j < n; j++) { // Columns
        if (!copiedBoard.get(i)[j] && !copiedBoard.hasRowConflictAt(i) && !copiedBoard.hasColConflictAt(j)) {
          copiedBoard.togglePiece(i, j);
          copiedBoard.pieces++;
        }
        if (!copiedBoard.hasAnyRowConflicts(i) && !copiedBoard.hasAnyColConflicts(j)) {
          recurse(copiedBoard, i+1, 0); // incremenet column, if only anycolconflict
        }
      } // End columns loop
    } // End rows loop

  }
  var board = new Board({n: n});
  board.pieces = 0;
  recurse(board, 0, 0);
  return results;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
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
        // Setting the pieces to test
        board.togglePiece(i,j);
        pieces++;
        if (!board.hasRowConflictAt(i) && !board.hasColConflictAt(j)) {
          // Base Case
          if (pieces === n) {
            return board;
          }
          // Recursive Case
          return recursive(board, i, j, pieces);
        } else {
          // Removing the piece that causes a conflict
          board.togglePiece(i,j);
          pieces--;
        }
      }
    }
  }

  recursive(solution, 0, 0, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows()));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
