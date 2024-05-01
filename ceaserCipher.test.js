const ceaserCipher = require('./ceaserCipher');

test('ceaserCipher exists', () => {
  expect(ceaserCipher).toBeDefined();
});

test('testCases for ceaserCipher', () => {
  expect(ceaserCipher('rachid', 2)).toEqual('tcejkg');
});
