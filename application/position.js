/**
 * Class to hold position data
 */

module.exports = Position;

function Position(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw 'Coordinates should be numbers'
    }
    this.x = x;
    this.y = y;
}

Position.prototype.getX = function() {
    return this.x;
};

Position.prototype.getY = function() {
    return this.y;
};

Position.prototype.toString = function() {
    return '\n{\n    x: ' + this.x + '\n    y: ' + this.y + '\n}';
};