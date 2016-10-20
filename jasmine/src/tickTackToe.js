function Game() {
  this._winningSolutions = [[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this._grid = [[1,2,3],
                [4,5,6],
                [7,8,9]];
}

Game.prototype.choose = function (letter, gridRef) {
  var L = letter;
  var gr = gridRef;

  if (this._grid.indexOf(L) === false) {
    throw new Error("That location choice has already been taken!");
    }
  else {
    for(var i = 0; i < this._grid.length; i++) {
        var section = this._grid[i];

        for(var j = 0; j < section.length; j++) {
            if (section[j] === gridRef) {
              section[j] = L;
            }
          }
        }
      }
  };
