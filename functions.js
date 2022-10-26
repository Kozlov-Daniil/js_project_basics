//Функции

// function declaration
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

//анонимные функции

let counter = 0
const interval = setInterval(function(){
    if (counter === 5){
    clearInterval(interval)
    } else{
    console.log(++counter)
        }
}, 1000)