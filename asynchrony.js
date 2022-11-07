//Event Loop

const TimeOut = setTimeout(() => {
   console.log('After timeout') 
}, 2500)

 clearTimeout(TimeOut)

const interval = setInterval(() => {
   console.log('After interval') 
}, 1000)

 clearInterval(interval)

//const delay = (callback, wait = 1000) => {
//    setTimeout(callback, wait)
//}
//
//delay(() => {
//    console.log('After delay')
//}, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => { //executor
      setTimeout(() => { //handler
        resolve()
        //reject('Что-то пошло не так, повторите попытку') //resolve для положительного результата, использовать reject для выдачи ошибки
    }, wait)  
    })
    return promise
}

//delay(2500)
//    .then(() => {
//    console.log('After 2 seconds')
//})
//    .catch(err => console.error('Error:' ,err))
//    .finally(() => console.log('Finally'))
//

const getData = () => new Promise (resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

//getData().then(data => console.log(data))

async function asyncExample() { //асинхронная функция
try{
await delay(3000) //await работает только в асинхронных функциях
const data = await getData()
console.log('Data', data)  
} catch (e) {
    console.log(e)
} finally{
    console.log('Finally')
}
}

asyncExample()


