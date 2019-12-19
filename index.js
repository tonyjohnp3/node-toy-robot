const Position = require('./application/position');
const SquareTable = require('./application/squareTable');
const Robot = require('./application/robot');
const CommandInterpreter = require('./application/commandInterpreter');

var robotPlaced = false; // var to check if robot has been placed on surface yet
var robot;

const fileName = (typeof process.argv[2] !== 'undefined' && process.argv[2] !== null) ? process.argv[2] : '';
const fs = require('fs');

// check if filename given or valid
if (fileName == '' || !fs.existsSync(fileName)) {
    console.log('Please provide valid filename');
    process.exit(0);
}

// create read interface for file
const readLine = require('readline');
const readInterface = readLine.createInterface({
    input: fs.createReadStream(fileName),
});

// execute each command in file line by line
readInterface.on('line', (line) => {
    // read through file and ignore commands until first valid PLACE command
    // once robot placed on valid spot, read through all commands
    if (!robotPlaced) {
        try {
            if (CommandInterpreter.getCommandName(line) == 'PLACE') {
                let args = {
                    'surface': new SquareTable(new Position(0, 0), 5)
                };
                robot = CommandInterpreter.execCommand('PLACE', line, args);
                if (robot instanceof Robot) {
                    robotPlaced = true;
                }
            }
        } catch(e) {
            // console.log(e);
        }
    } else {
        let args = {};
        try {
            switch(CommandInterpreter.getCommandName(line)) {
                case 'PLACE':
                    args = {
                        'surface': new SquareTable(new Position(0, 0), 5)
                    };
                    let tempRobot = CommandInterpreter.execCommand('PLACE', line, args);
                    if (tempRobot instanceof Robot) {
                        robot = tempRobot;
                    }
                    break;
                case 'MOVE':
                    args = {
                        'robot': robot,
                        'distance': 1
                    };
                    CommandInterpreter.execCommand('MOVE', line, args);
                    break;
                case 'LEFT':
                    args = {
                        'robot': robot,
                    };
                    CommandInterpreter.execCommand('LEFT', line, args);
                    break;
                case 'RIGHT':
                    args = {
                        'robot': robot,
                    };
                    CommandInterpreter.execCommand('RIGHT', line, args);
                    break;
                case 'REPORT':
                    args = {
                        'robot': robot,
                    };
                    CommandInterpreter.execCommand('REPORT', line, args);
                    break;
                default:
                    break;
            }
        } catch(e) {
            // console.log(e);
        }
    }
})
.on('close', () => {
    readInterface.close(); // close stream
});