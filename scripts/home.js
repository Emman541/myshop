import {products} from "../scripts/product.js"
import { updateCartNumber } from "../scripts/updateCartNumber.js";
// import {cartItems} from "../scripts/cart.js"

const shopNowButton = document.querySelector('.section-one button');

shopNowButton.addEventListener('click', () => {
  location.href = 'product.html'
  
})


 const container = document.querySelector('.product-categories');    container.innerHTML = ''; // Clear any existing content
 let html = '';
 products.forEach(homeProduct => {
      html += `
        <div class="product-container">
          <div class="product">
            <div class="sale-section">
              <span>
                <i class="fa-regular fa-heart"></i>
              </span>
              <div class="select-option">
                <p class="first-option">$</p>
                <p class="second-option%">%</p>
              </div>
            </div>
            <img src="${homeProduct.image}" alt="${homeProduct.name}">
            <div class="product-details">
              <p class="product-name">${homeProduct.name}</p>
              <p class="product-price-range">$${homeProduct.price}</p>
              <button class="Add-to-cart"
               data-product-id="${homeProduct.id}"
               data-product-name="${homeProduct.name}"
               data-product-image="${homeProduct.image}"
               data-product-price="${homeProduct.price}"
               data-product-quantity="${1}"
               >Add to cart</button>
            </div>
          </div>
        </div>
      `;
    });
  container.innerHTML = html;
  

  const addToCartButtons = document.querySelectorAll('.Add-to-cart')

    
  
  addToCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', () => {
      const productId = addToCartButton.getAttribute('data-product-id')
      const productName = addToCartButton.getAttribute('data-product-name')
      const productImage = addToCartButton.getAttribute('data-product-image')
      const productPrice = addToCartButton.getAttribute('data-product-price')
      const productQuantity = addToCartButton.getAttribute('data-product-quantity')
      
      const cartItems = { productId, productName, productImage, productPrice,productQuantity}
      console.log(cartItems);
      
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      console.log(cart);
      cart.push(cartItems)
      localStorage.setItem('cart', JSON.stringify(cart))
      updateCartNumber()
      console.log(products);
        
      
    })  
  })



  // const addToCartButtons = document.querySelectorAll('.Add-to-cart')
  

  // addToCartButtons.forEach((addToCartButton) => {
  //   addToCartButton.addEventListener('click', () => {
  //     const productId = addToCartButton.getAttribute('data-product-id')
  //     const productName = addToCartButton.getAttribute('data-product-name')
  //     const productImage = addToCartButton.getAttribute('data-product-image')
  //     const productPrice = addToCartButton.getAttribute('data-product-price')
  //     const productQuantity = addToCartButton.getAttribute('data-product-quantity');
      
  //     // const cartItems = { productId, productName, productImage, productPrice,productQuantity}

  //     const cart = JSON.parse(localStorage.getItem('cart')) || [];
  //     console.log(cart);

  //     const productIndex = cart.findIndex(item => item.id === productId)
  //     console.log(productIndex);

  //     if (productIndex > -1) {
  //       console.log(cart[productIndex].productQuantity += 1);
         
  //     } else{
  //     const cartItems = { productId, productName, productImage, productPrice,productQuantity}
  //     cart.push(cartItems)
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //     }
      
      
  //   })
    
  // })
  
    





