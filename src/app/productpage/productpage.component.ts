import { Component, OnInit } from '@angular/core';
import { products } from '../shared/models/product';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  product!:products;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService, private cartService:CartService,
    private router:Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.product = productService.getProductById(params['id'])
      })
    }

      ngOnInit(): void {
         }
         addToCart(){
          this.cartService.addToCart(this.product)
          this.router.navigateByUrl('/cart-page')
         }
        }
