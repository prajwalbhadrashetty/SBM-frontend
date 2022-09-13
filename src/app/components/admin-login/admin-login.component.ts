import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, private admin: AdminService) {}

  adminLoginForm = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  login() {
    if (this.adminLoginForm.valid) {
      this.admin.login(this.adminLoginForm.value).subscribe(
        (data:any) => {
          if(data.authToken){
            localStorage.setItem('id', data.userid);
            localStorage.setItem('token', data.authToken);
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          if (error.status == 422) alert('Password is incorrect');
          if (error.status == 404) alert('User does not exists');
        }
      );
    }
  }

}
