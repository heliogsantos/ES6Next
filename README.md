# Features ES6Next.

<p align="center">
  <img src="images/image-readme.png" width="1000" title="javascript image">
</p>

Para mais detalhes [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript).

## Arrow function

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função  **(function expression)** 
e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, 
e elas não podem ser usadas como construtoras (constructors).

```javascript
const numbers = [1,2,3,4,5,6];

const biggerSix = numbers.map(item => item * 2).filter(item => item > 6);

export const logArrowFunction = () => console.log(biggerSix) // [8, 10, 12];
````

## Destructuring

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
    console.log(street) // Boa Vista
    console.log(number) // 301
    console.log(uf) // SP
}


const numbers = [1,2,3];
const [ one, two, three ] = numbers;

const logDestructuringArry = () => {
    console.log(one) // 1
    console.log(two) // 2
    console.log(three) // 3
}

export { logDestructuringObject, logDestructuringArry }
````