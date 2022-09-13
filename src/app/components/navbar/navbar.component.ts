import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  getLoginStatus(){
    let status = false;
    if(localStorage.getItem('token')){
      status = true;
    }
    return status;
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('admin/login')
  }

}
