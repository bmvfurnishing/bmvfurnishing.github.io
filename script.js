const menuButton=document.querySelector('.menu-button');
const mobileMenu=document.querySelector('.mobile-menu');
const closeMenu=document.querySelector('.close-menu');
if(menuButton&&mobileMenu) menuButton.addEventListener('click',()=>mobileMenu.classList.add('active'));
if(closeMenu&&mobileMenu) closeMenu.addEventListener('click',()=>mobileMenu.classList.remove('active'));
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>mobileMenu?.classList.remove('active')));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
