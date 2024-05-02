import calculator from './calculator';

test('calculator exists', () => {
  expect(calculator).toBeDefined();
});

test('test cases for addition, subtraction, multiplication, division', () => {
  const testCases = [
    {
      input: [1, 2],
      add: 3,
      subtract: -1,
      multiply: 2,
      divide: 0.5,
    },
    {
      input: [1, 2],
      add: 3,
      subtract: -1,
      multiply: 2,
      divide: 0.5,
    },
    {
      input: [undefined, undefined],
      add: 0,
      subtract: 0,
      multiply: 0,
      divide: 0,
    }
  ]
  testCases.forEach((testCase) => {
    expect(calculator.add(testCase.input[0], testCase.input[1])).toEqual(testCase.add);
    expect(calculator.subtract(testCase.input[0], testCase.input[1])).toEqual(testCase.subtract);
    expect(calculator.multiply(testCase.input[0], testCase.input[1])).toEqual(testCase.multiply);
    expect(calculator.divide(testCase.input[0], testCase.input[1])).toEqual(testCase.divide);
  });
});
