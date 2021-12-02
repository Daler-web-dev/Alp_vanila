import {products} from "./data.js"

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
        console.log(key);
        span2.innerHTML += `<b> ${key}:</b>  ${item.about[key]}  <br>`
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

{/* <div class="item">
    <img src="img/product/sncrs.png" alt="" />
    <div class="description">
        <span class="h3">{{ item.name }}</span>
        <p class="note">{{ item.about }}</p>
        <div
            v-for="(desc, key) in item.description"
            :key="desc.key"
        >
            <span>{{key}}: <b>{{ desc }}</b></span>
        </div>

        <div class="active_button">
            Добавить в корзину +
        </div>

        <div class="cart-to">
            <img src="img/greyCart.png" alt="" />
            <span>В корзину</span>
        </div>
    </div>
</div> */}


console.log(products);