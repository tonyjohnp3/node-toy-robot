const Position = require('../application/position');
const SquareTable = require('../application/squareTable');
const Robot = require('../application/robot');

describe ('Testing robot class', () => {   
    test('It should create robot class with given params, if valid', () => {
        let robot = new Robot(new Position(0, 0), 'North', new SquareTable(new Position(0, 0), 5));
        expect(robot.getSurface().getXMin()).toBe(0);
        expect(robot.getSurface().getYMin()).toBe(0);
        expect(robot.getSurface().getXMax()).toBe(5);
        expect(robot.getSurface().getYMax()).toBe(5);
        expect(robot.getFacing()).toBe('NORTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should create robot class with default value for startPosition, when invalid startPosition given', () => {
        let robot = new Robot(new Position(-1, 10), 'North', new SquareTable(new Position(0, 0), 5));
        expect(robot.getSurface().getXMin()).toBe(0);
        expect(robot.getSurface().getYMin()).toBe(0);
        expect(robot.getSurface().getXMax()).toBe(5);
        expect(robot.getSurface().getYMax()).toBe(5);
        expect(robot.getFacing()).toBe('NORTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should create robot class with default value for orientation, when invalid orientaiotn given', () => {
        let robot = new Robot(new Position(-1, 10), 'default', new SquareTable(new Position(0, 0), 5));
        expect(robot.getSurface().getXMin()).toBe(0);
        expect(robot.getSurface().getYMin()).toBe(0);
        expect(robot.getSurface().getXMax()).toBe(5);
        expect(robot.getSurface().getYMax()).toBe(5);
        expect(robot.getFacing()).toBe('NORTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to EAST, when turning RIGHT from NORTH', () => {
        let robot = new Robot(new Position(0, 0), 'North', new SquareTable(new Position(0, 0), 5));
        robot.turn('right');
        expect(robot.getFacing()).toBe('EAST');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to WEST, when turning LEFT from NORTH', () => {
        let robot = new Robot(new Position(0, 0), 'North', new SquareTable(new Position(0, 0), 5));
        robot.turn('LEFT');
        expect(robot.getFacing()).toBe('WEST');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to west, when turning RIGHT from south', () => {
        let robot = new Robot(new Position(0, 0), 'south', new SquareTable(new Position(0, 0), 5));
        robot.turn('right');
        expect(robot.getFacing()).toBe('WEST');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to EAST, when turning left from south', () => {
        let robot = new Robot(new Position(0, 0), 'south', new SquareTable(new Position(0, 0), 5));
        robot.turn('lEft');
        expect(robot.getFacing()).toBe('EAST');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to north, when turning RIGHT from west', () => {
        let robot = new Robot(new Position(0, 0), 'west', new SquareTable(new Position(0, 0), 5));
        robot.turn('right');
        expect(robot.getFacing()).toBe('NORTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to south, when turning left from west', () => {
        let robot = new Robot(new Position(0, 0), 'west', new SquareTable(new Position(0, 0), 5));
        robot.turn('lEft');
        expect(robot.getFacing()).toBe('SOUTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to north, when turning left from east', () => {
        let robot = new Robot(new Position(0, 0), 'east', new SquareTable(new Position(0, 0), 5));
        robot.turn('LEFT');
        expect(robot.getFacing()).toBe('NORTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should turn robot to South, when turning right from east', () => {
        let robot = new Robot(new Position(0, 0), 'EAST', new SquareTable(new Position(0, 0), 5));
        robot.turn('RIGHT');
        expect(robot.getFacing()).toBe('SOUTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should move robot by 1 unit to north', () => {
        let robot = new Robot(new Position(0, 0), 'NOrth', new SquareTable(new Position(0, 0), 5));
        robot.move(1);
        expect(robot.getFacing()).toBe('NORTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(1);
    });
    test('It should not move robot when outside boundary', () => {
        let robot = new Robot(new Position(0, 0), 'NOrth', new SquareTable(new Position(0, 0), 5));
        robot.move(6);
        expect(robot.getFacing()).toBe('NORTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should not move robot when outside boundary but should turn after turning', () => {
        let robot = new Robot(new Position(0, 0), 'NOrth', new SquareTable(new Position(0, 0), 5));
        robot.turn('left')
        robot.move(6);
        expect(robot.getFacing()).toBe('WEST');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should move robot by 1 unit to south', () => {
        let robot = new Robot(new Position(0, 0), 'south', new SquareTable(new Position(0, -1), 5));
        robot.move(1);
        expect(robot.getFacing()).toBe('SOUTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(-1);
    });
    test('It should not move robot when outside boundary', () => {
        let robot = new Robot(new Position(0, 1), 'south', new SquareTable(new Position(0, 0), 5));
        robot.move(6);
        expect(robot.getFacing()).toBe('SOUTH');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(1);
    });
    test('It should move robot by 1 unit to east', () => {
        let robot = new Robot(new Position(0, 0), 'east', new SquareTable(new Position(0, -1), 5));
        robot.move(1);
        expect(robot.getFacing()).toBe('EAST');
        expect(robot.getPosition().getX()).toBe(1);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should not move robot when outside boundary', () => {
        let robot = new Robot(new Position(0, 1), 'east', new SquareTable(new Position(0, 0), 5));
        robot.move(6);
        expect(robot.getFacing()).toBe('EAST');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(1);
    });
    test('It should move robot by 1 unit to west', () => {
        let robot = new Robot(new Position(0, 0), 'west', new SquareTable(new Position(-2, -1), 5));
        robot.move(1);
        expect(robot.getFacing()).toBe('WEST');
        expect(robot.getPosition().getX()).toBe(-1);
        expect(robot.getPosition().getY()).toBe(0);
    });
    test('It should not move robot when outside boundary', () => {
        let robot = new Robot(new Position(0, 1), 'west', new SquareTable(new Position(0, 0), 5));
        robot.move(6);
        expect(robot.getFacing()).toBe('WEST');
        expect(robot.getPosition().getX()).toBe(0);
        expect(robot.getPosition().getY()).toBe(1);
    });
    test('It should return string "0,1,NORTH"', () => {
        let robot = new Robot(new Position(0, 0), 'NORTH', new SquareTable(new Position(0, 0), 5));
        robot.move(1);
        expect(robot.toString()).toBe('0,1,NORTH');
    });
    test('It should return string "0,0,WEST"', () => {
        let robot = new Robot(new Position(0, 0), 'NORTH', new SquareTable(new Position(0, 0), 5));
        robot.turn('LEFT');
        expect(robot.toString()).toBe('0,0,WEST');
    });
    test('It should return string "0,0,WEST"', () => {
        let robot = new Robot(new Position(1, 2), 'EAST', new SquareTable(new Position(0, 0), 5));
        robot.move(1);
        robot.move(1);
        robot.turn('LEFT');
        robot.move(1);
        expect(robot.toString()).toBe('3,3,NORTH');
    });
});