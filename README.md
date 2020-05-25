# Features ES6Next.

<p align="center">
  <img src="images/image-readme.jpg" width="1000" title="javascript image">
</p>

Para mais detalhes [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript).

## Arrow function (ES6)  🔥

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função  **(function expression)** 
e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, 
e elas não podem ser usadas como construtoras (constructors).

```javascript
const numbers = [1,2,3,4,5,6];

const biggerSix = numbers.map(item => item * 2).filter(item => item > 6);

export const logArrowFunction = () => console.log(biggerSix); // [8, 10, 12] 🧐
```

## Destructuring (ES6) 🔥

A sintaxe de atribuição via desestruturação  **(destructuring assignment)** é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.


```javascript
const address = {
    street: 'Boa Vista',
    number: 301,
    uf_address: {
        uf: 'SP'
    }
}
const { street, number, uf_address: { uf } } = address;

const logDestructuringObject = () => {
    console.log(street, number, uf); // Boa Vista 301 SP 🧐
}

const numbers = [1,2,3];
const [ one, two, three ] = numbers;

const logDestructuringArry = () => {
    console.log(one, two, three); // 1 2 3 🧐
}

export { logDestructuringObject, logDestructuringArry }
```

## Template strings (ES6) 🔥

Template literals são literais string que permitem expressões embutidas. Você pode usar string multi-linhas e interpolação de string com elas. Elas eram chamadas **"template strings"** nas versões anteriores à especificação ES2015.

```javascript
const name = 'Helio';
const age = 29;

const printAge = (param) => {
    return `${param} anos!`;
}

console.log(` Seu nome é ${name} e Você tem ${printAge(age)}`); // Seu nome é Helio e Você tem: 29 anos! 🧐

export const logTemplateString = () => console.log(` Seu nome é ${name} e Você tem ${printAge(age)}`);
```

## Rest parameters (ES6) 🔥

A sintaxe de rest parameter  **(parâmetros rest)**  nos permite representar um número indefinido de argumentos como um array.


```javascript
const numbers = [1,2,3,4,5,6];

const sumNumbers = (...param) => console.log(param.length); // 6 🧐

export const logRest = () => sumNumbers(numbers);
```

## Spread operator 🔥

A sintaxe de propagação  **(Spread)** permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.

```javascript
const css = { fontSize: 13, color: "#FFF" };

const titleCss = { fontweight: 'bold', ...css };

console.log(titleCss); // fontweight: "bold", fontSize: 13, color: "#FFF" 🧐

export const logSpread = () => console.log(titleCss);
```