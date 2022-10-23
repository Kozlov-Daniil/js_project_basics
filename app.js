//Number

const num = 42 //integer
const float = 42.42 //float
console.log(num)
console.log(float)

const pow = 10e3
console.log(pow)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53)-1)
console.log(Number.MIN_SAFE_INTEGER)

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53)-1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)

console.log('Max_value', Number.MAX_VALUE)
console.log('Min_value', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log(1/0)
console.log(Number.NaN) //Not a Number
console.log(typeof NaN)
console.log(2/undefined)

const weird = 2/undefined
console.log(isNaN(weird))
console.log(isNaN(123))

console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(123))

const stringInt = '7'
const stringFloat = '7.7'
console.log(stringInt + 3)
console.log(Number.parseInt(stringInt) + 3)
console.log(Number(stringInt) + 3)
console.log(+stringInt + 3)

console.log(stringFloat+2)
console.log(parseInt(stringFloat)+2)
console.log(parseFloat(stringFloat)+2)
console.log(+stringFloat+2)

console.log(0.4 + 0.2)
console.log( (2 / 5) + (1/5) ) 
console.log(+(0.4 + 0.2).toFixed(4)) // Не округление, а обрезание числа
console.log(parseFloat((0.4 + 0.2).toFixed(4)))

//BigInt
console.log( 90071992547409919999)
console.log(typeof 90071992547409919999)
console.log( 90071992547409919999n)
console.log(typeof 90071992547409919999n)
console.log( 90071992547409919999n -  9007199254740991n)
console.log(-90071992547409919999n)


//console.log(10n - 4) // eroor
console.log(10n - 4n)
console.log(parseInt(10n - 4n))
console.log(10n - BigInt(4))
console.log(5n / 2n)


//Math

console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42))
console.log(Math.max(42, 13, 23, 7, 123))
console.log(Math.min(42, 13, 23, 7, 123))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.49))
console.log(Math.round(4.51))
console.log(Math.trunc(4.9))

console.log(Math.random())


//Example

function getRandomBetween(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min) 
}

console.log(getRandomBetween(10, 15))






