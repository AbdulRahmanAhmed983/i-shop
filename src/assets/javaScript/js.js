
var slide;
let index = 0;
function next(){
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');

}

function prev(){
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}

window.onload=()=>{
   let closer =  document.querySelector('#closer');

closer.onclick = () => {
    closer.style.display = 'none';
    nav.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');


}
let nav = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    closer.style.display = 'block';
    nav.classList.toggle('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    closer.style.display = 'block';
    cart.classList.toggle('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    closer.style.display = 'block';
    login.classList.toggle('active');
}

let searchFrom = document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick = () => {
    searchFrom.classList.toggle('active');
}

window.onscroll  = () => {
    searchFrom.classList.remove('active');
}
slide = document.querySelectorAll('.home .slides-container .slide')
}

