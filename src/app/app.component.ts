import { Component, OnInit } from '@angular/core';
declare function menutoggle(): any;
declare function register(): any;
declare function login(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

  }
  title = 'angular-sale';
}
