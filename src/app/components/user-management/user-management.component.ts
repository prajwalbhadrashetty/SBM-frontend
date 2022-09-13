import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users : any = [];
  userForm: FormGroup;

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();  
    this.userForm = new FormGroup({
      id:new FormControl({value:0,disabled:true}),
      name:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      mailId:new FormControl('',Validators.required),
      redgDate:new FormControl(new Date(),Validators.required)
    });
  }

  get id(){
    return this.userForm.get('id').value;
  }

  getAllUsers(){
    this.user.getUsers().subscribe(
      (data:any)=>{
        this.users = data;
      })
  }

  addUser(){
    this.user.addUser(this.userForm.value).subscribe(
      (data:any)=>{
        if(data.id){
          this.getAllUsers();      
          this.userForm.reset();
        }
      }
    );
  }

  edit(user:any){
    this.userForm.patchValue({id:user.id,name:user.name,password:user.password,mobile:user.mobile,mailId:user.mailId,redgDate:user.redgDate})
  }

  updateUser(){
    this.user.updateUser(this.userForm.getRawValue()).subscribe(
      (data:any)=>{
        if(data.id){
          this.userForm.reset();
          this.getAllUsers();
        }
      }
    );
  }

  delete(id:any){
    this.user.deleteUser(id).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
    this.getAllUsers();
  }

}
