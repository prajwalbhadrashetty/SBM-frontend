import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  productForm: FormGroup;
  products: any= [];

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();  
    this.productForm = new FormGroup({
      id:new FormControl({value:0,disabled:true}),
      name:new FormControl('',Validators.required),
      make:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      cost:new FormControl('',Validators.required),
      createdDate:new FormControl(new Date(),Validators.required)
    });
  }

  get id(){
    return this.productForm.get('id').value;
  }

  getAllProducts(){
    this.product.getProducts().subscribe(
      (data:any)=>{
        this.products = data;
      })
  }

  addProduct(){
    this.product.addProduct(this.productForm.getRawValue()).subscribe(
      (data:any)=>{
        if(data.id){
          this.getAllProducts();      
          this.productForm.reset();
        }
      }
    );
  }

  edit(product:any){
    this.productForm.patchValue({
      id:product.id,
      name:product.name,
      make:product.make,
      model:product.model,
      cost:product.cost,
      createdDate:product.createdDate})
  }

  updateProduct(){
    this.product.updateProduct(this.productForm.getRawValue()).subscribe(
      (data:any)=>{
        if(data.id){
          this.productForm.reset();
          this.getAllProducts();
        }
      }
    );
  }

  delete(id:any){
    this.product.deleteProduct(id).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
    this.getAllProducts();
  }

}
