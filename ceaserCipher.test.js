import ceaserCipher from './ceaserCipher';

test('ceaserCipher exists', () => {
  expect(ceaserCipher).toBeDefined();
});

test('testCases for ceaserCipher', () => {
  expect(ceaserCipher('', 2)).toEqual('');
  expect(ceaserCipher('rachid', 2)).toEqual('tcejkf');
  expect(ceaserCipher('rachid rachid', 2)).toEqual('tcejkf tcejkf');
  expect(ceaserCipher('yyy', -1)).toEqual('xxx');
  expect(ceaserCipher('Ed', -8)).toEqual('Wv');
  expect(ceaserCipher('Zy', 4)).toEqual('Dc');
});
