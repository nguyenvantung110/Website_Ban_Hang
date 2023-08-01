import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DialogModalService } from '../shared/dialog-modal/dialog-modal.service';
import { DialogResult } from '../shared/dialog-modal/dialog-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
token!:string;
  constructor(private router:Router , private modalService : DialogModalService) { }

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
    this.modalService.openConfirmModal('Do your want to logout').subscribe((val : DialogResult) => {
      if(val.isOk()){
        localStorage.removeItem("jwt");
        this.router.navigate(['login']);
      }
      else {
        this.router.navigate(['']);
      }
    })
 }
}
