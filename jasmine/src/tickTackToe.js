


function Game() {
  this._winningSolutions = [[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this._grid = [[1,2,3],
              [4,5,6],
              [7,8,9]];
  this._plays = 9;

}

  Game.prototype.play = function (letter, gridNum) {
    this._plays -= 1;
    choose(letter, gridNum, this._grid);

    function choose(letter, gridNum, array) {
        if (array.indexOf(letter) === false) {
          throw new Error("That place is already taken!");
          }
        else {
          for(var i = 0; i < array.length; i++) {
              var arrSection = array[i];

          for(var j = 0; j < arrSection.length; j++) {
              if (arrSection[j] === gridNum) {
                  arrSection[j] = letter;
                  choose(letter, gridNum, game._winningSolutions);
              }
            }
          }
        }
      }

      game.winner();
      return game.gameStatus();
      };

    Game.prototype.winner = function () {
      for (var i = 0; i < this._winningSolutions.length; i++) {
        var arrSection = this._winningSolutions[i].toString();
        if (arrSection === "X,X,X") {
          return arrSection[0] + " wins!";
        }
        else if (arrSection === "O,O,O") {
            return arrSection[0] + " wins!";
        }
      }
    };

    Game.prototype.gameStatus = function () {
      if (this._plays === 0 ) {
        return 'Its a draw!';
        }
    };
