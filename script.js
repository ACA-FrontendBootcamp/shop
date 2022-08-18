//part data-promise-loading img

import {product} from "./data.js"

let imagel = document.createElement('img');
imagel.setAttribute('src','./assets/Loading_icon.gif');
document.body.appendChild(imagel)
imagel.classList.add('imagel')

function  fetchProducts(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(product), 600)
    }) 
}

//part-modal window layer
const modal = document.createElement('div')
document.body.appendChild(modal)
modal.classList.add('modal')
modal.classList.add('hidden')

const overlay = document.createElement('div')
document.body.appendChild(overlay)
overlay.classList.add('overlay')
overlay.onclick = () =>{
closeModal();
}
overlay.classList.add('hidden')




let arrBaskets=[];


function drowProducts(res){
    const container= document.createElement('div');
    document.body.appendChild(container);
    container.classList.add('container');
    
    const head = document.createElement('div');
    container.appendChild(head);
    head.classList.add('head');
    
    const mid = document.createElement('div');
    container.appendChild(mid);
    mid.classList.add('mid');


    const basketPlus = document.createElement('img');
    head.appendChild(basketPlus);
    basketPlus.classList.add('basketPlus')
    basketPlus.setAttribute('src','./assets/basket.png');
    basketPlus.onclick = () => {
        openModal() 
    }


    res.map(item => {
    let product = document.createElement('div');
    mid.appendChild(product);
    product.classList.add('product');

    const imagePart = document.createElement('div');
    product.appendChild(imagePart);
    imagePart.classList.add('imagePart')

    const image = document.createElement('img');
    imagePart.appendChild(image);
    image.setAttribute('src', `${item.img}`);
    image.classList.add('image');

    const textPart = document.createElement('div');
    product.appendChild(textPart)
    textPart.classList.add('textPart');

    const textName = document.createElement('div');
    textPart.appendChild(textName);
    textName.classList.add('textName')
    textName.innerHTML = item.name;


    const pricePart = document.createElement('div');
    textPart.appendChild(pricePart)
    pricePart.classList.add('pricePart');

    const price = document.createElement('div');
    pricePart.appendChild(price)
    price.classList.add('price');

    price.innerHTML = item.price+"դրամ"


    const basketImg = document.createElement('img');
    pricePart.appendChild(basketImg);
    basketImg.classList.add('basketImg')
    basketImg.setAttribute('src','./assets/basket.png');

    basketImg.onclick = () => {
        arrBaskets.push(item);
    }

    const heartRed = document.createElement('img');
    pricePart.appendChild(heartRed);
    heartRed.classList.add('heartRed')
    heartRed.classList.add('hidden')
    heartRed.setAttribute('src','./assets/heartRed.png');

    heartRed.onclick = ()=> { 
    heartImg.classList.remove('hidden')
    heartRed.classList.add('hidden')
    }

    const heartImg = document.createElement('img');
    pricePart.appendChild(heartImg);
    heartImg.classList.add('heartImg')
    heartImg.setAttribute('src','./assets/heart.png');

    heartImg.onclick = ()=> {
        heartRed.classList.remove('hidden')
        heartImg.classList.add('hidden')
    }
})
}

//part open-close modal(baskets products list)

let basketsProduct = document.createElement('div');
modal.appendChild(basketsProduct);
basketsProduct.classList.add('basketsProduct')

function closeModal(){
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
    while(basketsProduct.firstChild) {
        basketsProduct.firstChild.remove()
    }
}

function openModal()    {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')

    arrBaskets.map(item => {

    let productBaskets = document.createElement('div');
    basketsProduct.appendChild(productBaskets);
    productBaskets .classList.add('productBaskets');
    
    const imagePartBaskets = document.createElement('div');
    productBaskets.appendChild(imagePartBaskets);
    imagePartBaskets.classList.add('imagePartBaskets')
    
    const imageBaskets = document.createElement('img');
    imagePartBaskets.appendChild(imageBaskets);
    imageBaskets.setAttribute('src', `${item.img}`);
    imageBaskets.classList.add('imageBaskets');
    
    const textPartBaskets = document.createElement('div');
    productBaskets.appendChild(textPartBaskets)
    textPartBaskets.classList.add('textPartBaskets');
    
    const textNameBaskets = document.createElement('div');
    textPartBaskets.appendChild(textNameBaskets);
    textNameBaskets.classList.add('textNameBaskets')
    textNameBaskets.innerHTML = item.name;
    
    
    const pricePartBaskets = document.createElement('div');
    textPartBaskets.appendChild(pricePartBaskets)
    pricePartBaskets.classList.add('pricePartBaskets');
    
    const priceBaskets = document.createElement('div');
    pricePartBaskets.appendChild(priceBaskets)
    priceBaskets.classList.add('priceBaskets');
    
    priceBaskets.innerHTML = item.price+"դրամ"

    const imageDel = document.createElement('div');
    pricePartBaskets.appendChild(imageDel)
    imageDel.classList.add('imageDel')
    imageDel.innerHTML = "Հեռացնել"

    imageDel.onclick = (event) => {
        event.target.parentElement.parentElement.parentElement.remove()
        arrBaskets =  arrBaskets.filter(i => i!=item)
       
        console.log(item)

    }
})
}





const drow = () => {
    fetchProducts().then(res => JSON.parse(res))
  
   .then(res =>drowProducts(res)  )
   .then(res =>{
    imagel.remove()
})
}
drow()
