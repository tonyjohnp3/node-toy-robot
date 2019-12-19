const Position = require('./position');

function Surface(xMin, yMin, xMax, yMax) {
    this.xMin = isNaN(xMin) ? 0 : xMin;
    this.yMin = isNaN(yMin) ? 0 : yMin;
    this.xMax = isNaN(xMax) ? 1 : ((xMax > this.xMin) ? xMax : this.xMin + 1);
    this.yMax = isNaN(yMax) ? 1 : ((yMax > this.yMin) ? yMax : this.yMin + 1);
}

Surface.prototype.isPosInBoundary = function(pos) {
    if (pos instanceof Position) {
        let posX = pos.getX();
        let posY = pos.getY();
        if (posX >= this.xMin && posY >= this.yMin && posX <= this.xMax && posY <= this.yMax) {
            return true;
        }
    }
    return false;
};

Surface.prototype.getXMin = function() {
    return this.xMin;
};

Surface.prototype.getYMin = function() {
    return this.yMin;
};

Surface.prototype.getXMax = function() {
    return this.xMax;
};

Surface.prototype.getYMax = function() {
    return this.yMax;
};

Surface.prototype.toString = function() {
    return '\n{\n    xMin: ' + this.xMin + '\n    yMin: ' + this.yMin + '\n    xMax: ' + this.xMax + '\n    yMax: ' + this.yMax + '\n}';
};

module.exports = Surface;