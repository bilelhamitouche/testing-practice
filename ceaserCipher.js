function shift(char, shift) {
  const punctuation = [' ', '.', ':', '!', ',', ';', '?'];
  if (punctuation.includes(char)) return char;
  return String.fromCharCode(char.charCodeAt(0) + (shift % 26));
}

function upperShift(char, shift, upperCase = false) {
  const punctuation = [' ', '.', ':', '!', ',', ';', '?'];
  if (punctuation.includes(char)) return char;
  if (upperCase) {
    return String.fromCharCode(
      'A'.charCodeAt(0) +
        (shift % 26) -
        ('Z'.charCodeAt(0) - char.charCodeAt(0) + 1),
    );
  }
  return String.fromCharCode(
    'a'.charCodeAt(0) +
      (shift % 26) -
      ('z'.charCodeAt(0) - char.charCodeAt(0) + 1),
  );
}

function lowerShift(char, shift, upperCase = false) {
  const punctuation = [' ', '.', ':', '!', ',', ';', '?'];
  if (punctuation.includes(char)) return char;
  if (upperCase) {
    return String.fromCharCode(
      'Z'.charCodeAt(0) +
        (shift % 26) +
        (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1),
    );
  }
  return String.fromCharCode(
    'z'.charCodeAt(0) +
      (shift % 26) +
      (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1),
  );
}

function ceaserCipher(str, key) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      if (str[i].charCodeAt(0) + key < 65) {
        result += lowerShift(str[i], key, true);
      } else if (str[i].charCodeAt(0) + key > 90) {
        result += upperShift(str[i], key, true);
      } else {
        result += shift(str[i], key);
      }
    } else if (str[i] === str[i].toLowerCase()) {
      if (str[i].charCodeAt(0) + key < 97) {
        result += lowerShift(str[i], key);
      } else if (str[i].charCodeAt(0) + key > 122) {
        result += upperShift(str[i], key);
      } else {
        result += shift(str[i], key);
      }
    }
  }
  return result;
}

export default ceaserCipher;
