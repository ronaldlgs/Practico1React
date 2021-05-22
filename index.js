function FindIndex(arr, caracterBuscado){
    const result = arr.findIndex(x => x === caracterBuscado)
    console.log(`findIndex: ${result != 2}`);
}

function Every(arr, valor){
    const todosMayorAX = currentValue => currentValue > valor;
    const result = arr.every(todosMayorAX)
    console.log(`every: ${result}`);
}

function Some(arr, valor){
    const algunosMayorAX = currentValue => currentValue > valor;
    const result = arr.some(algunosMayorAX)
    console.log(`some: ${result}`);
}

function Filter(arr, largo){
    const result = arr.filter(value => value % 2 == 0);
    console.log(`filter: ${result}`);
}

function Map(arr, numero){
    const result = arr.map(x => x * numero);
    console.log(`map: ${result}`);
}

let numero = 2
const arr = [0,2,4,5,6,9,22,52,53,64,765];
console.log(`Valores: ${arr} | Número: ${numero}`)

console.log(`¿Existe el número ${numero} ?`)
FindIndex(arr, numero)

console.log(`¿Todos los valores son mayores que ${numero}?`)
Every(arr, numero)

console.log(`¿Alguno de los valores son mayores que ${numero}?`)
Some(arr, numero)

console.log('Valores pares del arreglo')
Filter(arr)

console.log(`Valores multiplicados por ${numero}`)
Map(arr, numero)