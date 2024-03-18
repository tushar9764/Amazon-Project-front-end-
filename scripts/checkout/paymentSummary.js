import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { products } from "../../data/products.js";



export function renderPaymentSummary(){
    let total=0;
    let shipTotal=0; 

    cart.forEach((cartItem)=>{
        let matchingProduct;
        products.forEach((product)=>{
            if(product.id===cartItem.id){
                matchingProduct=product;
            }
        });

        let deliveryOption;
        deliveryOptions.forEach((option)=>{
            if(option.id===cartItem.deliveryOptionId){
                deliveryOption=option;
            }
        });

        total+=(matchingProduct.priceCents * cartItem.quantity);
        shipTotal+=deliveryOption.priceCents;
    });
    const withoutTax=parseInt(parseInt(total.toFixed(0)));
    const Tax=parseInt(parseInt(((withoutTax+shipTotal)/10).toFixed(2)));
    const bill=withoutTax+Tax+shipTotal;

    const paymentSummaryHTML=`
            <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">&#8377 ${withoutTax}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">&#8377 ${shipTotal}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">&#8377 ${withoutTax+shipTotal}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">&#8377 ${Tax}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">&#8377 ${bill}</div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;

    

}
