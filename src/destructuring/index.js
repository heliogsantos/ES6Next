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