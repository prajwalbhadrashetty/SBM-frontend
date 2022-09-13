import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private Customer: AdminService) {}

  loginForm = new FormGroup({
    userid: new FormControl('', [Validators.required,]),
    username: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required]),
  });

  public res;

  ngOnInit(): void {}

  

  login() {
    if (this.loginForm.valid) {
      this.Customer.login(this.loginForm.value).subscribe(
        (data:any) => {
          this.res = data;
          if(data.authToken){
            localStorage.setItem('id', this.res.userid);
            localStorage.setItem('token', this.res.authToken);
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          if (error.status == 422) alert('Password is incorrect');
          if (error.status == 404) alert('User LogIn Sucessfully... !!');
          this.router.navigate(['/dashboard']);
        }
      );
    }
  }

}
