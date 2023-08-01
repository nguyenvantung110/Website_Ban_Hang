import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:5001/api";
  
  constructor(private http:HttpClient) { }
  acessToken = new BehaviorSubject<string>('');


  getProductList(token : string | null):Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/products/getproducts');
  }

  addProduct(val:any)
  {
    return this.http.post(this.APIUrl+'/products/createproduct',val);
  }

  updateProduct(val:any)
  {
    return this.http.put(this.APIUrl+'/products/updateproduct',val);
  }

  deleteProduct(val:any)
  {
    return this.http.delete(this.APIUrl+'/products/deleteproduct/'+val);
  }

  getUser(token : string |null):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/user')
  }
}
