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

/*window.getNRooksSolution = function(board, pieces, n) {
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
}*/




window.getSolution = function(row, n, board, tests, callback) {
  // Base case, when there are no more rows left
  var solutionsCount = 0;
  if (row === n) { // When the rows left is zero
    //callback();
    solutionsCount++;
    return;
  } 
  for (var i = 0; i < n; i++) {
    // Add piece to row
    board.togglePiece(row, i);
    // If no conflicts
    if (!board[tests]()) {
      getSolution(row+1, n, tests, callback);
    }
    
    // Remove piece
    board.togglePiece(row, i); // Reverting back to previous state (bad decision in decision tree)
  }
  return solutionsCount;
};


window.findNRooksSolution = function(n) {
  
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, conflictTest) {
  var solutionCount = 2;
  var board = new Board({n:n});

  getSolution(0, n, board, 'hasAnyRooksConflicts', function(){
    solutionCount++;
  });

  //var solution = countNRooksSolutions(n);
  
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  //return solution;
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

};
