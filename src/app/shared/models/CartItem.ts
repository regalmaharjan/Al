import { products } from "./product";

export class CartItem{
    constructor(product:products){
        this.product=product;
      
    }

    product:products;
    quantity:number = 1;
    get price():number{
        return this.product.price * this.quantity;
    }
}