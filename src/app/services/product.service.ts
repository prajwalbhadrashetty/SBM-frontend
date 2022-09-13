import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.productApi;

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(`${this.baseUrl}/product`); //getallproducts
  }

  addProduct(product:any){
    return this.http.post(`${this.baseUrl}/product`,product); //addproduct
  }

  updateProduct(product:any){
    return this.http.put(`${this.baseUrl}/product`,product); //updateproduct
  }

  deleteProduct(id:any){
    return this.http.delete(`${this.baseUrl}/product/`+ id); //deleteproduct
  }

}
