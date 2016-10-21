describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    });

  describe('initialize', function() {

    it("should should initialize with an array of winning solutions", function() {
      expect(game._winningSolutions).toEqual([[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]);
    });

    it("should should initialize with a TTT grid array", function() {
      expect(game._grid).toEqual([[1,2,3],
                            [4,5,6],
                            [7,8,9]]);
      });
    });

describe('player makes a choice', function() {
  beforeEach(function() {
    game._winningSolutions = [[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    game._grid = [[1,2,3],
            [4,5,6],
            [7,8,9]];
    });

  it("a player can make an X on the grid", function() {
    game.play('X',1);
    expect(game._grid).toEqual([['X',2,3],[4,5,6],[7,8,9]]);
  });


  it("a player can make an O on the grid", function() {
    game.play('O',1);
    expect(game._grid).toEqual([['O',2,3],[4,5,6],[7,8,9]]);
  });

  it("a player cannot choose a location already taken", function() {
    game.play('X',1);
    game.play('O',1);
    expect(game._grid).toEqual([['X',2,3],[4,5,6],[7,8,9]]);
  });

  it("the winningSolutions array can be altered", function() {
    game.play('X',1);
    expect(game._winningSolutions).toEqual([['X',2,3,],[4,5,6],[7,8,9],['X',4,7],[2,5,8],[3,6,9],['X',5,9],[3,5,7]]);
  });

  it("the winningSolutions array can be altered", function() {
    game.play('X',1);
    expect(game._winningSolutions).toEqual([['X',2,3,],[4,5,6],[7,8,9],['X',4,7],[2,5,8],[3,6,9],['X',5,9],[3,5,7]]);
  });

  it("each play reduces number of plays left by one", function() {
    game.play('X',1);
    expect(game._plays).toEqual(8);
  });


});

describe('winning', function() {
  beforeEach(function() {
    game._winningSolutions = [[1,'O','O',],[4,'X','O'],[7,8,'X'],[1,4,7],['O','X',8],['O',6,'X'],[1,'X','X'],['O','X',7]];
    game._grid = [[1,'O','O'],
            [4,'X','O'],
            [7,8,'X']];
    });
    it('game knows when X is a winner', function() {
      game.play('X', 1);
      expect(game.winner()).toEqual("X");
    });

    it('game knows when O is a winner', function() {
      game.play('O', 1);
      expect(game.winner()).toEqual("O");
    });

    it('game knows when there is not a winner', function() {
      game.play('X', 7);
      expect(game.winner('X')).not.toBe('X');
    });

  });

  describe('drawing', function() {
    beforeEach(function() {
      game._winningSolutions = [[1,'X','O',],['O','O','X'],['X','O','X'],['X','O','X'],['X','O','O'],['O','X','X'],['X','O','X'],['O','O','X']];
      game._grid = [[1,'X','O'],
                    ['O','O','X'],
                    ['X','O','X']];
      this._plays = 1;
      });
      it('game knows when theres a draw', function() {
        game.play('X', 1);
        expect(gameStatus()).toEqual('Draw');
      });
    });
});
