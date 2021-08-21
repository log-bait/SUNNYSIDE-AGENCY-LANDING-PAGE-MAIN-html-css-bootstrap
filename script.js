const menu = document.querySelector('.submenu');
const hummenu = document.querySelector('.hmenu');
const arrow = document.querySelector('.content');


hummenu.addEventListener("click", ()=>{
menu.classList.toggle('d-none');
arrow.classList.toggle('d-none');
})