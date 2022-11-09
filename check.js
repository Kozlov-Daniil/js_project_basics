//let a = 42
//let b = a
//b++
//console.log('a', a)
//console.log('b', b)


let a = [1, 2, 3]
let b = a
b.push(4)

let c = [1, 2, 3, 4]

console.log('a', a)
console.log('b', b)

console.log(a ===b)
console.log(a ===c)

//scope

function funcA() {
let a = 1

function funcB() {
    let b = 2
    
    function funcC() {
        let c = 3
        
        console.log('funcC:', a, b, c)
    }
    funcC()
    console.log('funcB:', a, b)
}
    funcB()
    console.log('funcA:', a)
}

funcA()


//hoisting
console.log(sum(1, 41))

function sum(a, b){
    return a+b
}
console.log(i)
var i = 43
console.log(i)

// const and let не подвержены хойстингу

//console.log(num)
const num =49
console.log(num)


//function expression & function declaration

//console.log(square(25))
//
//function square(num) {  // function declaration
//    return num ** 2
//}

const squaref = function (num) {
    return num ** 2
}

console.log(squaref(25))

// LET

let z = 'variable z'
let x = 'variable x'
{
    z = 'New variable Z'
    let x = 'Local variable X'
    console.log('Scope Z', z)
    console.log('Scope X', x)
}
console.log('Z:', z)
console.log('X:', x)


//CONST

const PORT = 8080
const array = ['JavaScript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array)

const obj = {}

obj.name = 'Eagle'
obj.age = 20

console.log(obj)
obj.age=21
delete obj.name
console.log(obj)


