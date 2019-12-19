const Position = require('../application/position');
const SquareTable = require('../application/squareTable');

describe ('Testing squareTable class', () => {   
    test('It should create squareTable class with given start position and equal distance, if position and distance are valid', () => {
        let squareTable = new SquareTable(new Position(0, 0), 5);
        expect(squareTable.getXMin()).toBe(0);
        expect(squareTable.getYMin()).toBe(0);
        expect(squareTable.getXMax()).toBe(5);
        expect(squareTable.getYMax()).toBe(5);
    });
    test('It should create surface class with default position, if position is invalid', () => {
        let squareTable = new SquareTable('test', 5);
        expect(squareTable.getXMin()).toBe(0);
        expect(squareTable.getYMin()).toBe(0);
        expect(squareTable.getXMax()).toBe(5);
        expect(squareTable.getYMax()).toBe(5);
    });
    test('It should create surface class with the coordinates that are non numbers corrected to default value', () => {
        let squareTable = new SquareTable(new Position(2, 3), 'test');
        expect(squareTable.getXMin()).toBe(2);
        expect(squareTable.getYMin()).toBe(3);
        expect(squareTable.getXMax()).toBe(3);
        expect(squareTable.getYMax()).toBe(4);
    });
});