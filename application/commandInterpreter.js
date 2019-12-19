const orientations = require('./orientation');
const validOrientations = [ ...orientations.validOrientations.keys() ];
const Robot = require('./robot');
const Position = require('./position');

const COMMANDS = new Map();
// Map with valid regex for each command
COMMANDS.set('PLACE', new RegExp("^PLACE \\d+,\\d+,(" + validOrientations.join('|') + ")$"));
COMMANDS.set('MOVE', /^MOVE$/);
COMMANDS.set('LEFT', /^LEFT$/);
COMMANDS.set('RIGHT', /^RIGHT$/);
COMMANDS.set('REPORT', /^REPORT$/);

module.exports.isCommandValid = function(name, command) {
    if (!COMMANDS.has(name)) {
        return false;
    }
    if (COMMANDS.get(name).test(command)) {
        return true;
    }
    return false;
};

module.exports.execCommand = function(name, command, args) {
    if (COMMANDS.has(name)) {
        switch(name) {
            case 'PLACE':
                if (args.hasOwnProperty('surface')) {
                    cmdArgs = getCommandArgs(command);
                    if (cmdArgs.length == 3) {
                        return new Robot(new Position(cmdArgs[0], cmdArgs[1]), cmdArgs[2], args.surface);
                    }
                }
                return false;
            case 'MOVE':
                if (args.hasOwnProperty('robot') && args.hasOwnProperty('distance')) {
                    args.robot.move(args.distance);
                }
                break;
            case 'LEFT':
                if (args.hasOwnProperty('robot')) {
                    args.robot.turn('LEFT');
                }
                break;
            case 'RIGHT':
                if (args.hasOwnProperty('robot')) {
                    args.robot.turn('RIGHT');
                }
                break;
            case 'REPORT':
                if (args.hasOwnProperty('robot')) {
                    console.log(args.robot.toString());
                }
                break;
            default:
                break;
        }
    }
};

// get the portion after first word
const getCommandArgs = function(command) {
    cmd = command.split(' ');
    if (cmd.length > 1) {
        return cmd[1].split(',');
    }
};

// get first word
const getCommandName = function(command) {
    let name = command.split(' ')[0];
    if (!COMMANDS.has(name)) {
        return false;
    }
    return name;
};

module.exports.getCommandName = getCommandName;