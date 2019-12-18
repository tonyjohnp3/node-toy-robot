const Position = require('./position');

function Surface(xMin, yMin, xMax, yMax) {
    this.xMin = isNaN(xMin) ? 0 : xMin;
    this.yMin = isNaN(yMin) ? 0 : yMin;
    this.xMax = isNaN(xMax) ? 1 : ((xMax > this.xMin) ? xMax : this.xMin + 1);
    this.yMax = isNaN(yMax) ? 1 : ((yMax > this.yMin) ? yMax : this.yMin + 1);
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