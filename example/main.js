var ABC = /** @class */ (function () {
  function ABC(x, y) {
    this.x = x;
    this.y = y;
  }
  ABC.prototype.draw = function () {
    console.log("X: " + this.x + "Y: " + this.y);
  };
  return ABC;
})();
var Peter = new ABC(5, 7);
Peter.draw();
