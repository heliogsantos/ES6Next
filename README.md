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

console.log(biggerSix); // [8, 10, 12] 🧐

export const logArrowFunction = () => console.log(biggerSix);
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

const logDestructuringObject = () => console.log(street, number, uf); // Boa Vista 301 SP 🧐


const numbers = [1,2,3];
const [ one, two, three ] = numbers;

const logDestructuringArry = () => console.log(one, two, three); // 1 2 3 🧐

export { logDestructuringObject, logDestructuringArry }
```

## Template strings (ES6) 🔥

Template literals são literais string que permitem expressões embutidas. Você pode usar string multi-linhas e interpolação de string com elas. Elas eram chamadas **"template strings"** nas versões anteriores à especificação ES2015.

```javascript
const name = 'Helio';
const age = 29;

const printAge = (param) => `${param} anos!`;

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

## Spread operator (ES6) 🔥

A sintaxe de propagação  **(Spread)** permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.

```javascript
const css = { fontSize: 13, color: "#FFF" };

const titleCss = { fontweight: 'bold', ...css };

console.log(titleCss); // fontweight: "bold", fontSize: 13, color: "#FFF" 🧐

export const logSpread = () => console.log(titleCss);
```

## Default Parameters (ES6) 🔥

Os parâmetros predefinidos de uma função permitem que parâmetros regulares sejam inicializados com com valores iniciais caso undefined ou nenhum valor seja passado.

```javascript
const sumNumbers = (numberOne, numbertwo = 10) => numberOne + numbertwo;

export const logParameters = () => console.log(sumNumbers(20)); // 30 🧐
```

## Const (ES6) 🔥

A  declaração **(const)** cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

Esta declaração cria uma constante que pode pertencer tanto ao escopo global (na janela ou objeto) quanto ao local do bloco em que é declarada. Constantes globais não se tornam propriedades do objeto window, diferente da criação de variáveis com var. Toda constante requer um inicializador, ou seja, é preciso especificar um valor para a constante no momento em que ela é declarada (o que faz sentido, uma vez que esse valor não pode ser alterado).

A declaração **(const)** cria uma referência somente leitura a um valor. Isso não significa que esse valor é imutável, apenas que o identificador da variável constante não pode ser alterado. Se o conteúdo do identificador for um objeto, isso significa que o conteúdo do objeto (ex. seus parâmetros) podem ser alterados.

Todas as considerações de "temporal dead zone" se aplicam tanto a let quanto a **(const)**.

Uma constante não pode ter o mesmo nome que uma função ou variável que esteja no mesmo escopo.

```javascript
const name = "Helio";

export const logConst = () => console.log(name); // Helio 🧐
```

## Let (ES6) 🔥

Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.

**(let)** permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.


```javascript
let age = 29;

export const logLet = () => console.log(age); // 29 🧐
```

## Map (ES6) 🔥

O método **map()** invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

O código a seguir mostrar como o método **(map)** funciona quando a função callback possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o **(map)** itera sobre o array original.

```javascript
const numbers = [1, 4, 9];

const doubles = numbers.map(item => item * 2);

// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]

export const logMap = () => console.log(doubles); // [2, 8, 18] 🧐
```

## Filter (ES6) 🔥

O método **filter()** cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou  um valor que seja convertido para true. O callback é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.

callback é invocado com estes três argumentos:

<ul style="list-style:none;">
  <li style="color:black;background-color:#f6dc27;width:300px;font-weight:bold;text-align:center">o valor do elemento</li><br>
  <li style="color:black;background-color:#f6dc27;width:300px;font-weight:bold;text-align:center">o índice do elemento</li><br>
  <li style="color:black;background-color:#f6dc27;width:300px;font-weight:bold;text-align:center">o objeto do array a ser preenchido</li><br>
</ul>

**filter()** não altera o array a partir da qual foi invocado.

O exemplo a seguir usa o **filter()** para criar um array filtrado em que todos os elementos com valores menores que 30 são removidos.

```javascript
const numbers = [1, 2, 3, 4, 5, 30, 40, 100, 300];

const biggerThirty = numbers.filter(item => item > 30);

export const logFilter = () => console.log(biggerThirty); // [40, 100, 300] 🧐
```