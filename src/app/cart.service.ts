import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];
  total = 0;
  
  constructor(
    private http: HttpClient
  ){}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.total = 0;
    return this.items;
  }

  getTotal() {
    for(var item of this.items){
      this.total=(this.total+item.price);
    }
    return this.total;
  }
  
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}