//window.alert('1') // = alert('1')
//
//window.confirm('Нажмите "Ок" если есть 18 лет') // = confirm('123')

const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')[0]
//const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
console.dir(heading2)

//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
//const heading3 = h2List[1]
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

console.log(heading)
console.dir(heading)
console.dir(heading.id)
console.dir(heading.textContent)

//setTimeout(() => {
//  addStylesTo(heading)
//}, 1500)

setTimeout(() => {
  addStylesTo(heading3)
}, 3000)





function addStylesTo(node){
    heading.textContent = 'Changed from JavaScript'
    heading.style.color = 'red'
    heading.style.textAlign = 'center'
    heading.style.backgroundColor = 'black'
    heading.style.padding = '2rem'  
}


heading.onclick= () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'red'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}