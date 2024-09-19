const hamburger = document.querySelector('.fa-bars')
const navbarMenu = document.querySelector('.right-nav-section ul');


hamburger.addEventListener('click', (event) => {
  navbarMenu.classList.toggle('active')
  event.stopPropagation()
  
})
window.addEventListener('click', (event) => {
  if (navbarMenu.classList.contains('active')) {
    navbarMenu.classList.remove('active')
  }
  
})
