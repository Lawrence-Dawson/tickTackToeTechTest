


function Game() {
  this._winningSolutions = [[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  this._grid =  [[1,2,3],
                [4,5,6],
                [7,8,9]];
  }

  Game.prototype.choose = function (letter, gridNum, array) {
    var array = (typeof array !== 'undefined') ? array : this._grid;
      if (array.indexOf(letter) === false) {
        throw new Error("That place is already taken!");
        }
      else {
        for(var i = 0; i < array.length; i++) {
            var arrayInArray = array[i];

      for(var j = 0; j < arrayInArray.length; j++) {
          if (arrayInArray[j] === gridNum) {
              arrayInArray[j] = letter;
              game.choose(letter, gridNum, this._winningSolutions);
            }
          }
        }
      }
      return game.gameStatus();
  };

  Game.prototype.gameStatus = function () {
    if (arraySum(this._grid) === 0) {
      return 'Its a draw!';
    }
    else {
      return game.winner();
    }
  };

  Game.prototype.winner = function () {
    for (var i = 0; i < this._winningSolutions.length; i++) {
      var arrayInArray = this._winningSolutions[i].toString();
      if (arrayInArray === "X,X,X") {
        return arrayInArray[0] + " wins!";
      }
      else if (arrayInArray === "O,O,O") {
          return arrayInArray[0] + " wins!";
      }
    }
  };

  function arraySum(array) {
    var sum=0;
    for(var a=0;a<array.length;a++){
       if(typeof array[a]=="number"){
           sum+=array[a];
       }else if(array[a] instanceof Array){
           sum+=arraySum(array[a]);
         }
      }
    return sum;
  }
