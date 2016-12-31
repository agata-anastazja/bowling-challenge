describe('Game',function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has a default score 0', function(){
    expect(game.score()).toEqual(0);
  });

  it('starts at frame 1', function(){
    expect(game._frame).toEqual(1);
  });
});
