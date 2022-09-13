import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private user:UserService,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      id:new FormControl({value:0,disabled:true}),
      name:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      mailId:new FormControl('',Validators.required),
      redgDate:new FormControl(new Date(),Validators.required)
    });
  }

  signUp(){
    this.user.addUser(this.signUpForm.value).subscribe(
      (data:any)=>{
        if(data.id){
          alert('Registered Successfully');
          this.signUpForm.reset();
          this.router.navigateByUrl('/login')
        }
      }
    );
  }

}
