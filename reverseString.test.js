import reverseString from './reverseString';

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('test cases for reverseString function', () => {
  expect(reverseString('')).toEqual('');
  expect(reverseString(undefined)).toEqual('');
  expect(reverseString(null)).toEqual('');
  expect(reverseString('bilel')).toEqual('lelib');
  expect(reverseString('bilel')).toEqual('lelib');
});
