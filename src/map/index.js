const numbers = [1, 4, 9];

const doubles = numbers.map(item => item * 2);

// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]

export const logMap = () => console.log(doubles);