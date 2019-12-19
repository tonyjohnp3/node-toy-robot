/**
 * Child class of surface to denote square surface
 */

const Position = require('./position');
const Surface = require('./surface');

function SquareTable(startPos, length) {
    if (isNaN(length) || !(startPos instanceof Position)) {
        throw 'Invalid startPos or length';
    }
    length = length;
    xMin = startPos.getX();
    yMin = startPos.getY();
    xMax = xMin + length;
    yMax = yMin + length;
    Surface.call(this, xMin, yMin, xMax, yMax);
}

SquareTable.prototype = Object.create(Surface.prototype);

module.exports = SquareTable;