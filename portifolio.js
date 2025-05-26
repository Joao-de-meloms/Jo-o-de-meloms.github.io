const menu= document.querySelector('#menu')
const navbar= document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('menu')
    navbar.classList.toggle('active')
}
