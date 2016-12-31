function Game(){
  this._score = 0;
  this._frame = 1;
};

Game.prototype.score = function(){
  return this._score;
};

Game.prototype.roll = function(number){
  this._score += number;
  return this._score;
};
