const Surface = require('../application/surface');

describe ('Testing surface class', () => {   
    test('It should create surface class with given coordinates, if coordinates are valid', () => {
        let surface = new Surface(0, 0, 5, 5);
        expect(surface.getXMin()).toBe(0);
        expect(surface.getYMin()).toBe(0);
        expect(surface.getXMax()).toBe(5);
        expect(surface.getYMax()).toBe(5);
    });
    test('It should throw exception, if xMax is lesser than xMin', () => {
        expect(() => {
            let surface = new Surface(0, 0, -2, 5);
        }).toThrow();
    });
    test('It should throw an exception, when non numbers passed', () => {
        expect(() => {
            let surface = new Surface(0, 'notANum', -2, 5);
        }).toThrow();
    });
});