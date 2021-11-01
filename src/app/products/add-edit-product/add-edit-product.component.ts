import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  constructor(private service:SharedService) { }

@Input() prod:any

ProductId!:number;
ProductName!:string;
Price!:number;
Description!:string;
ProductList!:any[];

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct()
  {
      this.service.getProductList().subscribe((data:any)=>{
      this.ProductList=data;

      this.ProductId=this.prod.productId;
      this.ProductName=this.prod.productName;
      this.Price=this.prod.price;
      this.Description=this.prod.description;
    });
  }
  addProduct()
  {
    var val={ 
              productId:this.ProductId,
              productName:this.ProductName,
              price:this.Price,
              description:this.Description
          };
    this.service.addProduct(val).subscribe(res=>{
      alert("Add successfully");
    });
  }


  updateProduct()
  {
    var val={
              productId:this.ProductId,
              productName:this.ProductName,
              price:this.Price,
              description:this.Description
    };
      this.service.updateProduct(val).subscribe(res=>{
      alert("Update successfully");
});
  }

}
