const Position = require('./position');
const Surface = require('./surface');

function SquareTable(startPos, length = 1) {
    length = isNaN(length) ? 1 : length;
    if (startPos instanceof Position) {
        xMin = startPos.getX();
        yMin = startPos.getY();
        xMax = xMin + length;
        yMax = yMin + length;
        Surface.call(this, xMin, yMin, xMax, yMax);
    } else {
        Surface.call(this, 0, 0, length, length);
    }
}

SquareTable.prototype = Object.create(Surface.prototype);

module.exports = SquareTable;