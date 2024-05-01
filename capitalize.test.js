
const capitalize = require('./capitalize');

test('capitalize function exists', () => {
  expect(capitalize).toBeDefined();
});

test('test cases for the capitalize function', () => {
  expect(capitalize('')).toEqual('');
  expect(capitalize(undefined)).toEqual('');
  expect(capitalize(null)).toEqual('');
  expect(capitalize('bilel')).toEqual('Bilel');
  expect(capitalize('rachid')).toEqual('Rachid');
})
