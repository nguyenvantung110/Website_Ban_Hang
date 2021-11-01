import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
token!:string;
  constructor(private router:Router) { }

 isUserAuthenticated()
 {
   const token=localStorage.getItem("jwt");
  if(token)
  {
    return true;
  }
  else{
    return false;
  }
 }

 logOut()
 {
   localStorage.removeItem("jwt");
 }
}
