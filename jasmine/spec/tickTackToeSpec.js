describe("Game", function() {

beforeEach(function() {
  game = new Game();
  winningSolutions = [[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  grid = [[1,2,3],
              [4,5,6],
              [7,8,9]];
  });

  it("should should initialize with an array of winning solutions", function() {
    expect(winningSolutions).toEqual([[1,2,3,],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]);
  });

  it("should should initialize with a TTT grid array", function() {
    expect(grid).toEqual([[1,2,3],
                                [4,5,6],
                                [7,8,9]]);
  });

  it("a player can make an X on the grid", function() {
    game.choose('X',1,grid);
    expect(grid).toEqual([['X',2,3],[4,5,6],[7,8,9]]);
  });

  it("a player can make an O on the grid", function() {
    game.choose('O',1,grid);
    expect(grid).toEqual([['O',2,3],[4,5,6],[7,8,9]]);
  });

  it("a player cannot choose a location already taken", function() {
    game.choose('X',1,grid);
    game.choose('O',1,grid);
    expect(grid).toEqual([['X',2,3],[4,5,6],[7,8,9]]);
  });

  it("the winningSolutions array can be altered", function() {
    game.choose('X',1, winningSolutions);
    expect(winningSolutions).toEqual([['X',2,3,],[4,5,6],[7,8,9],['X',4,7],[2,5,8],[3,6,9],['X',5,9],[3,5,7]]);
  });

});
