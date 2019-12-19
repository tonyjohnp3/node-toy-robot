const Position = require('./position');
const Surface = require('./surface');
const orientation = require('./orientation');

function Robot(startPos, facing, surface) {
    this.surface = (surface instanceof Surface) ? surface : new Surface(0, 0, 1, 1);
    this.facing = (orientation.isOrientationValid(facing.toUpperCase())) ? facing.toUpperCase() : 'NORTH';
    this.position = ((startPos instanceof Position) && this.surface.isPosInBoundary(startPos)) ? startPos : new Position(this.surface.getXMin(), this.surface.getYMin())
}

Robot.prototype.move = function(distance) {
    if (!isNaN(distance)) {
        var tempPos;
        switch(this.facing) {
            case 'NORTH':
                tempPos = new Position(this.position.getX(), this.position.getY() + distance);
                break;
            case 'EAST':
                tempPos = new Position(this.position.getX() + distance, this.position.getY());
                break;
            case 'SOUTH':
                tempPos = new Position(this.position.getX(), this.position.getY() - distance);
                break;
            case 'WEST':
                tempPos = new Position(this.position.getX() - distance, this.position.getY());
                break;
            default:
                break;                            
        }
        if (this.surface.isPosInBoundary(tempPos)) {
            this.position = tempPos;
        }
    }
};

Robot.prototype.turn = function(direction) {
    this.facing = orientation.turn(this.facing, direction);
};

Robot.prototype.getSurface = function() {
    return this.surface;
};

Robot.prototype.getFacing = function() {
    return this.facing;
};

Robot.prototype.getPosition = function() {
    return this.position;
};

Robot.prototype.toString = function() {
    // return '\n{\n    Position: ' + this.position + '\n    Facing: ' + this.facing + '\n    Surface: ' + this.surface + '\n}';
    return this.getPosition().getX() + ',' + this.getPosition().getY() + ',' + this.getFacing();
};

module.exports = Robot;