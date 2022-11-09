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