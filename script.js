AOS.init({once: true});
// AOS Link 
// AOS Link 


const menuOn=document.querySelector('.openMenu')

const menuOff=document.querySelector('.closeMenu')

const navlink=document.querySelector('.nav-links')


function openMenu() {
    menuOff.classList.toggle("active")
    menuOn.classList.toggle("active")
    navlink.classList.toggle("active")
}