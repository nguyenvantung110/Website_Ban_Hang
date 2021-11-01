import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

prod:any

ProductId!:number;
ProductName!:string;
Price!:number;
Description!:string;
FileName!:string;
ProductList:any=[];


  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getProdList();
  }

  totalLength!:any;
  page:number=1;
  


  getProdList(){
    this.service.getProductList().subscribe(data=>{
      this.ProductList=data;
      this.totalLength=data.length;
    });
  }
  
}
