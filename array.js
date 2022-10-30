const cars = ['Mazda', 'Ford', 'Bmw', 'Mercedes']
const people = [
    {name: 'Eagle', budget: 4200},
    {name: 'Danya', budget: 5300},
    {name: 'Orel', budget: 6700}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

//Function
function addItemToEnd() {
    
}

//Method
cars.push('Porshe')
cars.unshift('Volga')
console.log(cars)
const firstItem = cars.shift()
const lastItem = cars.pop()
console.log(cars)
console.log(firstItem)
console.log(lastItem)
console.log(cars.reverse())
console.log(cars)

const index = cars.indexOf('Bmw')
console.log(cars[index])
cars[index] = 'Porshe'
console.log(cars)

const fIndex = people.findIndex(function(person) {
    return person.budget === 5300
})
console.log(fIndex)
console.log(people[fIndex])

let findedPerson
for (const person of people) {
    
    if (person.budget === 4200) {
        findedPerson = person
    }
}
console.log(findedPerson)


const person = people.find(person => person.budget === 6700)
console.log(person)


console.log(cars.includes('Mazda'))



const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})
console.log(upperCaseCars)
console.log(cars)

const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)

const pow2Fibs = fib.map(pow2).map(sqrt)
//const pow2Fibs = fib.map(pow2).map(Math.sqrt)
console.log(pow2Fibs)

const pow2Fib = fib.map(num => num ** 2)
const filteredNumbers = pow2Fib.filter(num => {
    return num > 20
})
console.log(pow2Fib)
console.log(filteredNumbers)


// Задача 1
const text = 'Привет, мы изучаем JS'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)


const allBudget = people
.filter(person => person.budget > 4200)
.reduce(function(acc, person) {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)

//const displayItems = allItems.filter(item => item.name.indexOf('phone') !== =1)




