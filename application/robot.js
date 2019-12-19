const Position = require('./position');
const Surface = require('./surface');
const orientation = require('./orientation');

function Robot(startPos, facing, surface) {
    if (!(surface instanceof Surface) || !orientation.isOrientationValid(facing.toUpperCase()) || !(startPos instanceof Position) || !surface.isPosInBoundary(startPos)) {
        throw 'Could not place Robot!'
    }
    this.surface = surface;
    this.facing = facing.toUpperCase();
    this.position = startPos;
}

Robot.prototype.move = function(distance) {
    if (!isNaN(distance)) {
        let tempPos;
        switch(this.facing) {
            case 'NORTH':
                tempPos = new Position(this.position.getX(), parseInt(this.position.getY()) + parseInt(distance));
                break;
            case 'EAST':
                tempPos = new Position(parseInt(this.position.getX()) + parseInt(distance), this.position.getY());
                break;
            case 'SOUTH':
                tempPos = new Position(this.position.getX(), parseInt(this.position.getY()) - parseInt(distance));
                break;
            case 'WEST':
                tempPos = new Position(parseInt(this.position.getX()) - parseInt(distance), this.position.getY());
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