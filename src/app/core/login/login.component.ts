import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginGroup:FormGroup;
  username:FormControl;
  password:FormControl;
  isUsernameFocused:boolean;
  isPasswordFocused:boolean;
  Failed:boolean=false;
  
  constructor(builder:FormBuilder,private _authService:AuthService,
    private _router:Router) { 
    this.username = new FormControl('',[Validators.required]);
    this.password = new FormControl('',[Validators.required]);
    this.loginGroup = builder.group({
      username:this.username,
      password:this.password
    });
    this.loginGroup.reset();
    console.log("the user name value is",this.username.value);
  }
  ngOnInit() {
    
  }
  bluredUser(event){
    if(event.target.value == ''){
      this.isUsernameFocused=false;
    }
  }
  bluredPass(event){
      if(event.target.value == ''){
      this.isPasswordFocused=false;
    }
  }
  onSubmit(data){
    this._authService.checkAuthorzatino(data.username,data.password);
    if(this._authService.isLoggedIn() == true)
    {
      this._router.navigate([this._authService.redirectUrl || '/Patients']);
    }
    else{
      this.Failed=true
    }
    return false;
  }

}
