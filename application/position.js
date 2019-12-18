module.exports = Position;

function Position(x, y) {
    this.x = isNaN(x) ? 0 : x;
    this.y = isNaN(y) ? 0 : y;
}

Position.prototype.getX = function() {
    return this.x;
};

Position.prototype.getY = function() {
    return this.y;
};