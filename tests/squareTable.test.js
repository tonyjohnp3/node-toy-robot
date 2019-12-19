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
    test('It should throw exception, if position is invalid', () => {
        expect(() => {
            let squareTable = new SquareTable('test', 5);
        }).toThrow();
    });
    test('It should throw exception with the coordinates that are non numbers corrected to default value', () => {
        expect(() => {
            let squareTable = new SquareTable(new Position(2, 3), 'test');
        }).toThrow();
    });
});