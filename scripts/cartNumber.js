import { cart } from "../data/cart.js";


export function update(){
    let number=0;
    cart.forEach((cartElement)=>{
        number+=cartElement.quantity;
    });
    
    document.querySelector('.js-cartNum').innerHTML=`Checkout Items: (${number})`;
}

