
export let cart= JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart=[{
        id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2,
        deliveryOptionId:'1'
    }, {
        id:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
        deliveryOptionId:'2'
    },{
        id:"3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity:4,
        deliveryOptionId:'3'
    }];
}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(button){
    const productId=button.dataset.productId;
    let itWasThere=false;
    
    const quantitySelect=button.parentElement.querySelector('.quantitySelect');
    const selectedByUser = parseInt(quantitySelect.value, 10);
    //console.log(selectedByUser);
    
    cart.forEach((cart_element) => {
      if(cart_element.id===productId){
        cart_element.quantity+=selectedByUser;
        itWasThere=true;
        
      }   
    })
    if(itWasThere==false){
      cart.push({
          id:productId,     
          quantity:selectedByUser,   
          deliveryOptionId:'1'  
      })
    }
    saveToStorage(cart);
  }

  export function deleteFromCart(productId){
     const newCart=[];

     cart.forEach((cartElement)=>{
        if(cartElement.id!==productId){
            newCart.push(cartElement);
        }
     });
     cart=newCart;
     
     saveToStorage(cart);
     
  }

 export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productId===cartItem.id){
            matchingItem=cartItem;
        }
    });

    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStorage();
 }