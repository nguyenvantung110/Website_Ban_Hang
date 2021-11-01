import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  constructor(private service:SharedService) { }

ProductList:any=[];
ModalTitle!:string;
ActivateAddEditProdComp:boolean=false;
prod:any;
check!:number;

  ngOnInit(): void {
   this.refreshProdList();
  }


  addClick()
  {
    this.prod={
      check:0,
      ProductId:0,
      ProductName:"",
      Price:0,
      Description:""
    }
    this.ModalTitle="Add Product";
    this.ActivateAddEditProdComp=true;
  }


  closeClick()
  {
    this.ActivateAddEditProdComp=false;
    this.refreshProdList();
  }

  editClick(item:any)
{
  this.prod=item;
  console.log(item);
  this.ModalTitle="Edit Product";
  this.ActivateAddEditProdComp=true;
}


deleteClick(item:any)
{
  if(confirm('Are you sure?'))
  {
    this.service.deleteProduct(item.productId).subscribe(data=>{
      alert("Delete successfully");
      this.refreshProdList();
    })
  }
}

  refreshProdList(){
    this.service.getProductList().subscribe(data=>{
      this.ProductList=data;
    });
  }
}
