function shift(char, shift) {
  return String.fromCharCode(char.charCodeAt(0) + (shift % 26));
}

function ceaserCipher(str, key) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += shift(str[i], key);
  }
  return result;
}

//export default ceaserCipher;

console.log(ceaserCipher("bilel0", 1));
console.log(ceaserCipher("Bilel", 4));
