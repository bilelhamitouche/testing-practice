
const calculator = {
  add: (number1, number2) => {
    if(number1 === undefined || number2 === undefined) return 0;
    return number1 + number2;
  },
  subtract: (number1, number2) => {
    if(number1 === undefined || number2 === undefined) return 0;
    return number1 - number2; 
  },
  multiply: (number1, number2) => {
    if(number1 === undefined || number2 === undefined) return 0;
    return number1 * number2; 
  },
  divide: (number1, number2) => {
    if(number1 === undefined || number2 === undefined) return 0;
    if(number2 === 0) return 0;
    return number1 / number2; 
  }
}

export default calculator;
