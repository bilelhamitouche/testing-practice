const analyzeArray = require("./analyzeArray");

test("analyzeArray exists", () => {
  expect(analyzeArray).toBeDefined();
});

test("test cases for the analyzeArray function", () => {
  const testCases = [
    {
      input: [8, 1, 2, 3],
      average: 3.5,
      min: 1,
      max: 8,
      length: 4,
    },
    {
      input: [1, 2, 3, 4],
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    },
  ];
  testCases.forEach((testCase) => {
    expect(analyzeArray(testCase.input)).toEqual({
      average: testCase.average,
      min: testCase.min,
      max: testCase.max,
      length: testCase.length,
    });
  });
});
