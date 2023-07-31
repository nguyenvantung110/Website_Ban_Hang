import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  token! : string | null;

  constructor(private service : SharedService) { 
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('jwt');
    console.log('dt ', this.token);
    this.service.getUser(this.token).subscribe(
      res => {
          console.log(res)    
      }, err => {
          console.log(err)
      }
  )}
}
