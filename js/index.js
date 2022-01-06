import {products, questions} from "./data.js"

let modalWindow = document.querySelector('.side-bar')
let modal_bg = document.querySelector('.modal-bg')
let close_btn = document.querySelectorAll('.close')
let menu = document.querySelector('.menu')
let products_place = document.querySelector('.products')

menu.onclick = () => {
    modalWindow.classList.add('side-bar-active')
    modal_bg.style.display = 'block'
}
close_btn.forEach((item, index) => {
    item.onclick = () => {
        modalWindow.classList.remove('side-bar-active')
        modal_bg.style.display = 'none'
    }
})

for(let item of products) {
    let div = document.createElement('div')
    let image = document.createElement('img')
    let description = document.createElement('div')
    let span = document.createElement('span')
    let p = document.createElement('p')
    let span2 = document.createElement('span')
    



    span.innerHTML = item.title
    p.innerHTML = item.description
    for(let key in item.about) {
        span2.innerHTML += `<b> ${key}:</b>  ${item.about[key]}  <br> <br>`
    }
    

    image.setAttribute('src', item.img)
    div.classList.add('item')
    description.classList.add('description')
    span.classList.add('h3')
    p.classList.add('note')

    description.append(span, p, span2)
    div.append(image, description)
    products_place.append(div)
}


console.log(products);

let whyWe = document.querySelector('.why-we')
console.log(whyWe);

for(let item of questions) {
    let div = document.createElement('div')
    let image = document.createElement('img')
    let description = document.createElement('div')
    let span = document.createElement('span')
    let p = document.createElement('p')
    let span2 = document.createElement('span')
    
    span.innerHTML = item.title
    p.innerHTML = item.description
    for(let key in item.about) {
        span2.innerHTML += `<b> ${key}:</b>  ${item.about[key]}  <br> <br>`
    }
    

    image.setAttribute('src', item.img)
    div.classList.add('item', 'whyWeItem')
    description.classList.add('description')
    span.classList.add('h3')
    p.classList.add('note')

    description.append(span, p, span2)
    div.append(image, description)
    whyWe.append(div)
}
