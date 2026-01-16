const { sum, divide, isEven, average } = require('../src/math.js');
describe('test of math function', () => {
  // ------------------sum--------------------
  test('sum of positive numbers', () => {
    expect(sum(5, 3)).toBe(8);
  });
  test('sum of negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
  //   ------------ divide -------------------
  test('deviding numbers', () => {
    expect(divide(9, 3)).toBe(3);
  });
  test('dividing by zero, catching the Error', () => {
    expect(() => divide(9, 0)).toThrow(Error);
  });
  // -------------------------- is Even -------------------------
  test('checking if the given number is even', () => {
    expect(isEven(14)).toBeTruthy();
  });
  test(' checking if the given number is even', () => {
    expect(isEven(15)).toBeFalsy();
  });
  // -------------------------average------------------
  test('examine the average number of an array', () => {
    const arr = [7, 7, 7];

    expect(average(arr)).toBe(7);
  });
  test('examine the average number of the array', () => {
    const arr = [];
    expect(() => average(arr)).toThrow(Error);
  });
});
