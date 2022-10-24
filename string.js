const name = 'Орлик'
console.log(typeof name)

const age = 20
const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
console.log(output)

function getAge() {
    return age
}

const out = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет.`
console.log(out)

const tern = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A' : 'B'} лет.`
console.log(tern)

const str = `
<div> This is div</div>
<p>This is p</p>
`
console.log(str)

const val = 'Строка'
console.log(val.length)
console.log(val.toUpperCase())
console.log(val.toLocaleLowerCase())
console.log(val.charAt(2))
console.log(val.indexOf('рок'))
console.log(val.indexOf('б'))
console.log(val.startsWith('Стр'))
console.log(val.startsWith('стр'))
console.log(val.toLocaleLowerCase().startsWith('стр'))
console.log(val.endsWith('ка'))
console.log(val.endsWith('кА'))
console.log(val.repeat(2))
const value = '     count     '
console.log(value)
console.log(value.trim())
console.log(value.trimLeft())
console.log(value.trimRight())

function logPerson(s, namea, agea) {
    console.log(s, namea, agea)
    if (agea < 0){
        agea = 'Ещё не родился'
    }
    return `${s[0]}${namea}${s[1]}${agea}${s[2]}`
}

const personName = 'Орлик'
const personName2 = 'Никто'
const personAge = '20'
const personAge2 = '-20'

const res = logPerson`Имя: ${personName}, возраст: ${personAge}!`
const res2 = logPerson`Имя: ${personName2}, возраст: ${personAge2}!`

console.log(res)
console.log(res2)


