import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users : any = [];
  profileForm: FormGroup;
  isReadOnly: boolean = true;

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      id:new FormControl({value:0,disabled:true}),
      name:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      mailId:new FormControl('',Validators.required),
      redgDate:new FormControl(new Date(),Validators.required)
    });

  }

  disableread(element, text){
    this.isReadOnly= !this.isReadOnly;
    if(this.isReadOnly==true){
      element.textContent = "Edit";
      element.color = "#6f61c6";
    }else{
      element.textContent = text;
    }
    
  }

  get id(){
    return this.profileForm.get('id').value;
  }

  updateUser(){
    this.user.updateUser(this.profileForm.getRawValue()).subscribe(
      (data:any)=>{
        if(data.id){
          
        }
      }
    );
  }

}
