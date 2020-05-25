const name = 'Helio';
const age = 29;

const printAge = (param) => {
    return `${param} anos!`;
}

console.log(` Seu nome é ${name} e Você tem ${printAge(age)}`); // Seu nome é Helio e Você tem: 29 anos!;

export const logTemplateString = () => console.log(` Seu nome é ${name} e Você tem ${printAge(age)}`);
