// Переменные //
const name = 'Eagle'
/*const lastname = 'Talibal'*/
let age = 20
let isProgrammer = true

console.log(isProgrammer)

// Мутирование //

console.log('Имя человека: ' + name + ', а возраст человека: ' + age)
/*console.log(age)
console.log(age.toString())*/

/*alert('Имя человека: ' + name + ', а возраст человека: ' + age)*/
/*
const lastname = prompt('Введите фамилию')
alert(name + ' ' + lastname)*/

// Операторы //

/*const currentYear = 2022
const birthYear = 2002

const currentAge = currentYear - birthYear
console.log(currentAge)*/

const a = 10
const b = 5



console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)

let vari = 20

console.log(++vari)
console.log(--vari)

/*let c = 32
c = c + a
c += a
c -= a
c *= a
c /= a
console.log(c)*/


// Типы данных //
const prog = true
const namex = 'Vlad'
const agex = 15
let x
console.log(typeof prog)
console.log(typeof namex)
console.log(typeof agex)
console.log(typeof x)
console.log(null)
console.log(typeof null)

// Приоритет операторов //

const fullAge = 20
const birthAgex = 2002
const currentAgex = 2022

const isFullAge = (currentAgex - birthAgex) >= fullAge
console.log(isFullAge)

// Условные операторы //

const courseStatus = 'fail' // ready, fail, pending

if (courseStatus === 'ready') {
    console.log('Курс уже готов и его можно проходить')
    } else if (courseStatus === 'pending'){
    console.log('Курс находится в процессе разработки')
} else {
    console.log('Курс не получился')
}

const Ready = false

if(Ready){
    console.log('Всё готово')
}else{
    console.log('Ещё не готово')
}

Ready ? console.log('Ready') : console.log('Is not ready') // Тернарное выражение

const num1 = 42 // number
const num2 = '42' // string

console.log(num1 == num2)
console.log(num1 === num2)

// Функции

function calculateAge(year){
    return 2022 - year
}

const myAge = calculateAge(2002)
console.log(myAge)

console.log(calculateAge(2002))


function logInfoAbout(name, year){
    const currentAge = calculateAge(year)
    if (currentAge > 0){
    console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + currentAge)
         } else{
             console.log('Вообще-то это уже будущее')
         }
}

logInfoAbout('Даниил', 2002)
logInfoAbout('Анна', 2004)
logInfoAbout('Орлик', 2023)


// Массивы
const cars = ['Бмв', 'Мазда', 'Ауди']
console.log(cars)

const car = new Array('Бмв', 'Мазда', 'Ауди')
console.log(car)

console.log(cars[1])
console.log(cars[0])
console.log(cars[3])

console.log(cars.length)

cars[0] = 'Форд'
cars[3] = 'BMW'
console.log(cars)
cars[cars.length] = 'Audi'
console.log(cars)

// Циклы

const cars_1 = ['Бмв', 'Мустанг', 'Копейка', 'ещё итерация']

for (let i = 0; i < cars_1.length; i++) {
    const cr = cars_1[i]
    console.log(cr)
}


const peremen = ['1', '2', '3']

for (let per of peremen) {
    console.log(per)
}


// Объекты

const person = {
    firstName: 'Eagle',
    lastName: 'Talibal',
    year: 2002,
    languages: ['Ru', 'Eng'],
    hasWife: false,
    greet: function(){
        console.log('greet from person')
    }
}

console.log(person)

console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.greet()
person.isProgrammer = true
console.log(person)









