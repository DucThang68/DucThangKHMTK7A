let menu = document.querySelector('#menu');
let nvabar = document.querySelector('.nvabar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nvabar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nvabar.classList.remove('active');

}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

var swiper = new Swiper(".spham", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
});

function loader(){
    document.querySelector('.loader').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut;


const user = document.querySelector('#user');
const registerLink = document.querySelector('.Register-link');
const loginLink = document.querySelector('.Login-link');
const btnPopup = document.querySelector('.btn-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () =>{
    user.classList.add('active');
};

loginLink.onclick = () =>{
    user.classList.remove('active');
};

btnPopup.onclick = () =>{
    user.classList.add('active-popup');
};

iconClose.onclick = () =>{
    user.classList.remove('active-popup');
};