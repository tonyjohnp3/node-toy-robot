module.exports = Position;

function Position(x, y) {
    this.x = x;
    this.y = y;
}

Position.prototype.getX = function() {
    return this.x;
};

Position.prototype.getY = function() {
    return this.y;
};