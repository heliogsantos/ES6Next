const numbers = [1,2,3,4,5,6];

const biggerSix = numbers.map(item => item * 2).filter(item => item > 6);

export const logArrowFunction = () => console.log(biggerSix) // [8, 10, 12];
    