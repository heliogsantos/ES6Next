const numbers = [1, 2, 3, 4, 5, 30, 40, 100, 300];

const biggerThirty = numbers.filter(item => item >= 30);

export const logFilter = () => console.log(biggerThirty);
    