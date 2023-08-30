import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { products } from 'src/app/shared/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor() { }

  getProductById(id:number): products{
    return this.getAll().find(product => product.id == id)!;
  }



  getAllProductByTag(tag: string) :products[]{
    return tag == "All"?
    this.getAll() :this.getAll().filter(products.tags?.includes(tag));

    // if(tag == 'All')
    // return this.getAll()
    // else
    // return this.getAll().filter(products.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
    {name: 'All',count:13},
    {name: 'logitech', count:3 },
    {name:'hyperX' ,count:2 },
    {name:'Razerviper' ,count:1 },
    {name:'Reddragon' ,count:2 },
    {name:'RoyalKludge', count:1 },
    {name:'Onepiece', count:3 },
    {name:'Glorious ', count:1 },
    {name:'OnePiece',count:3},
    ];

  }
  getAll():products[]{
    return [
    {
      id: 1,
      name:'Glorious O Model',
      arrivalTime: '1-2 days',
      price: 80,
      favorite: false,
      origins:['US'],
      imageUrl:'/assets/Glorious O model.jpg',
      tags: ['Glorious,mouse,wired,gaming'],
     },

     {
      id: 2,
      name:'hyperX headphone',
      arrivalTime: '1-2 days',
      price: 100,
      favorite: false,
      origins:['US'],
      imageUrl:'/assets/hypeX headphones.jpg',
      tags: ['hyperX,headphone,wired,gaming'],
     },

     {
      id: 3,
      name:'hyperx keyboard',
      arrivalTime: '1-2 days',
      price: 100,
      favorite: true,
      origins:['US'],
      imageUrl:'/assets/hyperX keyboard.jpg',
      tags: ['hyperx,keyboard,wired,gaming'],
     },

     {
      id: 4,
      name:'Logitech Gpro',
      arrivalTime: '1-2 days',
      price: 85,
      favorite: true,
      origins:['US'],
      imageUrl:'/assets/Logitech gpro.jpg',
      tags: ['Logitech,mouse,wired,gaming'],
     },
     {
      id: 5,
      name:'Logitech Keyboard',
      arrivalTime: '1-2 days',
      price: 120,
      favorite: true,
      origins:['US'],
      imageUrl:'/assets/Logitech.jpg',
      tags: ['Logitech,keyboard,wired,gaming'],
     },
     {
      id: 6,
      name:'OnePiece Statue',
      arrivalTime: '1-2 days',
      price: 10,
      favorite: false,
      origins:['japan'],
      imageUrl:'/assets/one piece 2.jpg',
      tags: ['OnePiece,statue'],
     },
     {
      id: 7,
      name:'OnePiece Statue',
      arrivalTime: '1-2 days',
      price: 10,
      favorite: true,
      origins:['japan'],
      imageUrl:'/assets/onepiece statue.jpg',
      tags: ['OnePiece,statue'],
     },
     {
      id: 8,
      name:'OnePiece Statue',
      arrivalTime: '1-2 days',
      price: 10,
      favorite: true,
      origins:['japan'],
      imageUrl:'/assets/one piece.jpg',
      tags: ['OnePiece,statue'],
     },
     {
      id: 9,
      name:'Logitech Gpro',
      arrivalTime: '1-2 days',
      price: 85,
      favorite: true,
      origins:['US'],
      imageUrl:'/assets/razer headphone.jpg',
      tags: ['Logitech,mouse,wired,gaming'],
     },
     {
      id: 10,
      name:'Razerviper ultimate',
      arrivalTime: '1-2 days',
      price: 80,
      favorite: true,
      origins:['US'],
      imageUrl:'/assets/Razer ultimate.jpg',
      tags: ['Razerviper,mouse,wired,gaming'],
     },
     {
      id: 10,
      name:'Reddragon Keyboard',
      arrivalTime: '1-2 days',
      price: 60,
      favorite: true,
      origins:['Asia'],
      imageUrl:'/assets/Reddragon keyboard for mobile.jpg',
      tags: ['Reddragon,mouse,wired,gaming'],
     },
     {
      id: 10,
      name:'Reddragon mouse',
      arrivalTime: '1-2 days',
      price: 35,
      favorite: true,
      origins:['Asia'],
      imageUrl:'/assets/Reddragon mouse.jpg',
      tags: ['Reddragon,mouse,wired,gaming'],
     },
     {
      id: 10,
      name:'RoyalKludge doremon',
      arrivalTime: '1-2 days',
      price: 50,
      favorite: true,
      origins:['Europe'],
      imageUrl:'/assets/RoyalKludge doremon.jpg',
      tags: ['RoyalKludge,keyboard,wired,gaming'],
     }
    ];

  }
}
