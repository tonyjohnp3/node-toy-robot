const Position = require('./position');

function Surface(xMin, yMin, xMax, yMax) {
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
}

Surface.prototype.isPosInBoundary = function(pos) {
    if (pos instanceof Position) {
        posX = pos.getX();
        posY = pos.getY();
        if (posX >= this.xMin && posY >= this.yMin && posX <= this.xMax && posY <= this.yMax) {
            return true;
        }
    }
    return false;
};

module.exports = Surface;