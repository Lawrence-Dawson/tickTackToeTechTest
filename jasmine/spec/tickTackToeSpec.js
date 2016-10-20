describe("Game", function() {

beforeEach(function() {
  game = new Game();
  });

  it("should should initialize with an array of winning solutions", function() {
    expect(game._winningSolutions).toEqual([[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]);
  });

  it("should should initialize with a TTT grid array", function() {
    expect(game._grid).toEqual([[1,2,3],
                                [4,5,6],
                                [7,8,9]]);
  });

  it("a player can make an X on the grid", function() {
    game.choose('X',1);
    expect(game._grid).toEqual([['X',2,3],[4,5,6],[7,8,9]]);
  });

  it("a player can make an O on the grid", function() {
    game.choose('O',1);
    expect(game._grid).toEqual([['O',2,3],[4,5,6],[7,8,9]]);
  });

  it("a player cannot choose a location already taken", function() {
    game.choose('X',1);
    game.choose('O',1);
    expect(game._grid).toEqual([['X',2,3],[4,5,6],[7,8,9]]);
  });

  // it("a players choice is also marked on possible solutions", function() {
  //   game.choose('x',1);
  //   expect(game._winningSolutions).toEqual();
  // });

});
