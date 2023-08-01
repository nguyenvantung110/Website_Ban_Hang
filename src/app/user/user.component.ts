import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service : SharedService, private loading : LoadingService) { }

  userList: any[] = [];

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.loading.setDisplay(true)
    this.service.getUser('').subscribe(res => {
      this.userList = res
      this.loading.setDisplay(false)
    })
    this.loading.setDisplay(false);
  }
}
