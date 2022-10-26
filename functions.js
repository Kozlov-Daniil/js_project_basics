//Функции

//1 function declaration
function greet(name) {
    console.log('Привет - ', name)
}


//function expression
const greet2 = function greet2(name) {
    console.log('Привет2 - ', name)
}

greet('Лена')
greet2('Лена')

console.log(typeof greet)

console.dir(greet)

//2 анонимные функции

//let counter = 0
//const interval = setInterval(function(){
//    if (counter === 5){
//    clearInterval(interval)
//    } else{
//    console.log(++counter)
//        }
//}, 1000)

// 3 стрелочные функции

function greet(name) {
    console.log('Привет - ', name)
}

const arrow = (name) => {
    console.log('Привет - ', name)
}

const arrow2 = name => console.log('Привет - ', name)

arrow('Eagle')
arrow2('Eagle2')

const pow2 = num => {
    return num ** 2
}

const Pow2 = num => num ** 2

console.log(pow2(5))
console.log(Pow2(7))

// 4 Параметры по умолчанию

const sum = (a, b) => a + b

console.log(sum(40, 5))


const sum2 = (a, b) => a + b

console.log(sum2(40))

const sum3 = (a, b=3) => a + b

console.log(sum3(40))

function sumAll(...all) {
    let result = 0
    for (let num of all){
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// 5 Замыкания

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Daniil')
console.log(logWithLastName('Kozlov'))
console.log(logWithLastName('Orlov'))