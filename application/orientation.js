const validOrientations = new Map;

validOrientations.set('NORTH', {
    'left': 'WEST',
    'right': 'EAST'
});
validOrientations.set('SOUTH', {
    'left': 'EAST',
    'right': 'WEST'
});
validOrientations.set('EAST', {
    'left': 'NORTH',
    'right': 'SOUTH'
});
validOrientations.set('WEST', {
    'left': 'SOUTH',
    'right': 'NORTH'
});

module.exports.isOrientationValid = function(orientation) {
    return validOrientations.has(orientation.toUpperCase());
};

module.exports.turn = function(currOrientation, turnDirection) {
    turnDirection = turnDirection.toUpperCase();
    if (['LEFT', 'RIGHT'].includes(turnDirection)) {
        switch(turnDirection) {
            case 'LEFT':
                return validOrientations.get(currOrientation).left;
            case 'RIGHT':
                return validOrientations.get(currOrientation).right;
            default:
                break;
        }
    }
    return currOrientation;
}