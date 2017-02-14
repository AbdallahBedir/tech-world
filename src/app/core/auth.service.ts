import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  Authentications:any={username:"Admin",password:"Admin"};
  //isLogged:boolean;
  redirectUrl:string;

  constructor() { 
      
  }
  logout(){
      localStorage.removeItem("credentials");
  }
  isLoggedIn():boolean{
      return localStorage.getItem("credentials") == "true" ? true :false;
  }
  checkAuthorzatino(username:string,password:string){
    if(username.toLowerCase() =="admin" &&
        password.toLowerCase() == "admin")
      {
          localStorage.setItem("credentials","true");
      }
  }
}
