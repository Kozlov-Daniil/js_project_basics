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

//Closures

function sayHelloTo(name){
    const message = 'Hello ' + name
    
    return function() {
        console.log(message)
    }
}


const helloToElena = sayHelloTo('Elena')
helloToElena()


function createFrameworkManager() {
    const fw = ['Angular', 'React']
    
    return{
        print: function() {
            console.log(fw.join(' '))
        },
        add: function (framework){
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
console.log(manager)
manager.print()
manager.add('VueJS')
manager.print()

//SETTIMEOUT

const fib = [1, 2, 3, 5, 8, 13]

for (let i = 0; i< fib.length; i++){
    (function(j){
         setTimeout(function(){
        console.log(`fib[${j}] = ${fib[j]}`)
    }, 1500)
    })(i)
   
}


//IIFE - immediate invoked function express

let result = []
//for (var i = 0; i < 5; i++){
//    result.push(function(){
//        console.log(i)
//    })
//}
//
//result[2]()
//result[4]()

for (var i = 0; i < 5; i++){
    (function(){
        var j = i
        result.push(function(){console.log(j)})
    })()
}

result[2]()
result[4]()

//CONTEXT

const person = {
    surname: 'Старк',
    knows: function(what, name){
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

const john = { surname: 'Сноу'}

person.knows('всё', 'Бран')
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон'])
person.knows.call(john, ...['ничего не', 'Джон'])
person.knows.bind(john, 'ничего не', 'Джон')()


function Person(name, age){
    this.name = name
    this.age = age
    
    console.log(this)
}

const elena = new Person('Elena', 20)



//Явный
function logThis() {
    console.log(this)
}

const objc = {num: 42}
logThis.apply(objc)
logThis.call(objc)
logThis.bind(objc)()

//Не явный
const animal = {
    legs: 4,
    logThis: function() {
        console.log(this)
    }
}

animal.logThis()


function cat(color){
    this.color = color
    console.log('This', this)
    ;(() => console.log('Arrow this', this))()
}

new cat ('red')


//NEW

function Cat (color, name){
    this.color = color
    this.name = name
}

const Cats = new Cat('black', 'Cit')
console.log(Cats)

function MyNew(constructor, ...args){
    const objt = {}
    Object.setPrototypeOf(objt, constructor.prototype)
    return constructor.apply(objt, args) || objt
}

const kit = MyNew(Cat, 'gray', 'Kot')
console.log(kit)


//PROTOTYPES
// __proto__
//Object.getPrototypeOf

function Snake(name, color){
    this.name = name
    this.color = color
}

Snake.prototype.voice = function() {
    console.log(`Snake ${this.name} says shh`)
}

const snake = new Snake('Zmeya', 'grey')
console.log(Snake.prototype)
console.log(snake)
console.log(snake.__proto__ === Snake.prototype) 
console.log(snake.constructor)
//Snake.voice()


function Persons(){}
    Persons.prototype.legs = 2
    Persons.prototype.skin = 'white'

const personss = new Persons()
personss.name = 'Eagle'

console.log('skin' in personss)
console.log(personss.legs)
console.log(personss.eyes)
console.log(personss.name)

console.log(personss.hasOwnProperty('name'))
console.log(personss.hasOwnProperty('skin'))

//Object.create()
let proto = {year: 2020}
const myYear = Object.create(proto)

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)
proto.year = 2200
console.log(myYear.year)
proto = {year: 999}
console.log(proto)


//ASYNC

const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first()
setTimeout(second, 0)
third()


