

function Game() {

var winningSolutions = [[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var grid = [[1,2,3],
        [4,5,6],
        [7,8,9]];
  }

Game.prototype.choose = function (letter, gridRef, array) {

  if (array.indexOf(letter) === false) {
    throw new Error("That location choice has already been taken!");
    }
  else {
    for(var i = 0; i < array.length; i++) {
        var arrSection = array[i];

    for(var j = 0; j < arrSection.length; j++) {
        if (arrSection[j] === gridRef) {
              arrSection[j] = letter;
            }
          }
        }
      }
    };
