import {products} from "../../data/products.js";
import {cart, updateDeliveryOption} from "../../data/cart.js";
import { deleteFromCart } from "../../data/cart.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../../data/formatCurrency.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { update } from "../cartNumber.js";

export function renderOrderSummary(){



let checkoutElements='';


cart.forEach((cartElement)=>{
    
    let HTML='';
    let matchingElement;
    products.forEach((product)=>{
        if(cartElement.id===product.id){
            matchingElement=product;

            const deliveryOptionId=cartElement.deliveryOptionId;
            let deliveryOption;
            deliveryOptions.forEach((option)=>{
              if(option.id===deliveryOptionId){
                deliveryOption=option;
              }
            });
            const today=dayjs();
            const deliveryDate=today.add(deliveryOption.deliveryDays,'days');
            const dateString=deliveryDate.format('dddd, MMMM D');

             HTML=`
    <div class="cart-item-container js-cart-container-${matchingElement.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingElement.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingElement.name}
                </div>
                <div class="product-price">
                &#8377 ${parseInt(((matchingElement.priceCents* cartElement.quantity)/1).toFixed(0))}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartElement.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingElement.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
              ${deliveryOptionsHTML(matchingElement,cartElement)}
               
              
              </div>
            </div>
          </div>
    `
        }
    });
    checkoutElements+=HTML;
    

});

function deliveryOptionsHTML(matchingElement,cartElement ){
  let html='';
    deliveryOptions.forEach((deliveryOption)=>{
      const today=dayjs();
      const deliveryDate=today.add(deliveryOption.deliveryDays,'days');
      const dateString=deliveryDate.format('dddd, MMMM D');
      const priceString=deliveryOption.priceCents===0
      ? 'FREE'
      : ` &#8377 ${formatCurrency(deliveryOption.priceCents)} `;

      const isChecked= deliveryOption.id=== cartElement.deliveryOptionId;

      html+=`
        <div class="delivery-option js-deliveryOption"
        data-product-id="${matchingElement.id}"
        data-delivery-option-id="${deliveryOption.id}">
        <input type="radio" ${isChecked ?'checked' :''}
        
          class="delivery-option-input"
          name="delivery-option-${matchingElement.id}">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${priceString} - Shipping
          </div>
        </div>
      </div>
      `
    });
    return html;
}

document.querySelector('.js-order-summary').innerHTML=checkoutElements;

document.querySelectorAll('.js-delete-link').forEach((link)=>{
  link.addEventListener('click',()=>{
    const productId=link.dataset.productId;
    deleteFromCart(productId);
    renderPaymentSummary();
    update();
    document.querySelector(`.js-cart-container-${productId}`).remove();
    
  });
});

document.querySelectorAll('.js-deliveryOption').forEach((element)=>{
  element.addEventListener('click',()=>{
    const {productId,deliveryOptionId}=element.dataset;
    updateDeliveryOption(productId,deliveryOptionId);
    renderOrderSummary();
    renderPaymentSummary();
    
  });
});
}

