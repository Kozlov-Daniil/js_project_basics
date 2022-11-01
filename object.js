const person = {
    name: 'Eagle',
    age: 20,
    isProgrammer: true,
    languages: ['ru', 'eng'],
    'complex key': 'Complex Value',
    ['key_'+ (1+3)]: 'Computed Key', //key_4
    greet(){ //function
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени:', this.name) //person=this
    }
}

console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
person.greet()

person.age++
person.languages.push('by')
person['key_4'] = undefined
console.log(person)
delete person['key_4']


//const name = person.name
//const age = person.age
//const languages = person.languages

//console.log(name, age, languages)

const {age: personAge, name, languages} = person
console.log(name, personAge, languages)


for (let key in person){
    if (person.hasOwnProperty(key)){
    console.log('key:', key)
    console.log('value:', person[key])  
    }
}


const keys = Object.keys(person)
console.log(keys)
keys.forEach((key) => {
     console.log('key:', key)
    console.log('value:', person[key])  
})

console.log('this', this)
// Context
person.info()

//const logger = {
//    keys(obj) {
//        console.log('Object Keys:', Object.keys(obj))
//    }
//}

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this))
    },
    keysAndValues(){
        // 'key': value
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false){
        if (top){
            console.log('--------Start------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !==array.length-1){
            console.log('--------------')
        }
        })
        if (bottom){
            console.log('--------End------')
        }
        
    }
}

//const bound = logger.keys.bind(this)
//bound()

const bound = logger.keys.bind(person)
bound()

logger.keys.call(person)

logger.keysAndValues.call(logger)
logger.keysAndValues.call(person)
logger.keysAndValues.call({a: 1, c: {b: 2}})

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])