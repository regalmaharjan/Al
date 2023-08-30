import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { products } from '../shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:products[]=[];
  constructor(private fs:ProductService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.products = this.fs.getAll().filter(product => product.name.toLocaleUpperCase().includes(params['searchItem'].toLocaleUpperCase()));
      else if(params['tag'])
      this.products= this.fs.getAllProductByTag(params['tag'])
      else
      this.products = this.fs.getAll();
    })


    
  }

}
