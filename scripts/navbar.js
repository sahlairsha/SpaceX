
const menu=document.getElementById('main-menu');
const overlay=document.getElementById('overlay');
const btn=document.getElementById('menu-btn');
const menuItems=document.getElementById('main-menu')


btn.addEventListener('click',navToggle);

function navToggle(){

           btn.classList.toggle('open');
           menu.classList.toggle('show-menu');
           overlay.classList.toggle('overlay-show');
           menuItems.classList.toggle('active');


}
