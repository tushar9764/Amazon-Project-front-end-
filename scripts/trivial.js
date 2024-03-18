import { products } from "../data/products.js";


export function changeCurrency(products){
    products.forEach((product)=>{
        let price=product.priceCents;
        let priceRS=price*0.78;
        product.priceCents=priceRS;
    });
    
}
