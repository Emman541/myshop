
let initCartNumber = JSON.parse(localStorage.getItem('initCartNumber')) || 0;
let cartNumber = document.querySelector('.cart-number')

export function updateCartNumber() {

  initCartNumber++
  cartNumber.innerText = initCartNumber;
  localStorage.setItem('initCartNumber', JSON.stringify(initCartNumber))
}