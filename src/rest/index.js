const numbers = [1,2,3,4,5,6];

const sumNumbers = (...param) => console.log(param.length) // 6

export const logRest = () => sumNumbers(numbers);
