import { products } from "../scripts/product.js";


// export let cartItems = []
// document.addEventListener('DOMContentLoaded', function() {
//   // Sample data for cart items
//    cartItems = [
//     { id: 1, 
//       name: 'Vanity Mirror Silver', 
//       description: 'Description of the product goes here.', 
//       price: '49.99', 
//       image: '../images/6-piece-non-stick-baking-set.webp', 
//       quantity: 2
//      },{ 
//       id: 2, 
//       name: 'Vanity Mirror Gold', 
//       description: 'Description of another product goes here.', 
//       price: '59.99', 
//       image: '../images/6-piece-white-dinner-plate-set.jpg', 
//       quantity: 1 }
//   ];

//   // Function to create cart item elements using innerHTML
//   function createCartItemElements(items) {
//     const container = document.querySelector('.cart-items');
//     container.innerHTML = ''; // Clear any existing content

//     let html = '';

//     items.forEach(item => {
//       html += `
//         <div class="cart-item" data-price="${item.price}">
//           <img src="${item.image}" alt="Product Image">
//           <div class="item-info">
//             <h3>${item.name}</h3>
//             <p>${item.description}</p>
//             <span class="price">$${item.price}</span>
//             <div class="quantity">
//               <label for="quantity${item.id}">Quantity: <span class="quantity-number">${item.quantity}</span></label>
//               <input type="number" id="quantity${item.id}" name="quantity${item.id}" min="1" value="${item.quantity}" class="input-number-value">
//               <div class="update-remove">
//                 <button class="button update">Update</button>
//                 <button class="button remove">Remove</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//     });

//     container.innerHTML = html;
//   }

//   // Populate cart items
//   createCartItemElements(cartItems);
// });
const cartItems = document.querySelector('.cart-items')
// console.log(cartItems);

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem('cart'))|| [];
  
  // console.log(items);
  if (items.length === 0) {
    cartItems.innerHTML = 'The cart is empty'
    cartItems.style.textAlign = 'center'
    
  } else{

    items.forEach((item) => {
      // item.quantity = 1; 
      console.log(item.productId);
      const cartItem = document.createElement('div')
      cartItem.className = 'cart_item'
      console.log(cartItem);
      cartItem.innerHTML = `
      <div class="cart-item" data-price="49.99">
      <img src="${item.productImage}" alt="${item.productName}">
      <div class="item-info">
      <h3>${item.productName}</h3>
      <p>Description of the product goes here.</p>
      <span class="price">$${item.productPrice}</span>
      <div class="quantity">
      <label for="quantity2">Quantity: <span class="quantity-number">${item.productQuantity}</span></label>
      <input type="number" id="quantity2" name="quantity2" min="1" value="1" class="input-number-value">
      <div class="update-remove">
      <button class="button update">Update</button>
      <button class="button remove">Remove</button>
      </div>
      </div>
      </div>
      </div>
      
      `;
      cartItems.appendChild(cartItem)

      
    
      
      
    })
  }

  
  // return items
  
}
displayCartItems()

const removeButtons = document.querySelectorAll('.remove')
console.log(removeButtons);

function removeProduct() {
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => {
      const buttonClicked = event.target
      const cartItemContainer = document.querySelector('.cart-item')
      console.log(cartItemContainer);
      removeButton.parentElement.parentElement.parentElement.parentElement.remove()
            
    })
    
  })
  
}
removeProduct()




