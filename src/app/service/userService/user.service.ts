import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private httpService: HttpService) { 
     this.token=localStorage.getItem('token')

  }

    register(reqdata:any){
       return this.httpService.postService("userSignUp",reqdata,false,{});
    }

    login(reqdata:any){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          Authorization : this.token  
        })
      }
      return this.httpService.postService("userlogin",reqdata,true,httpOptions)
    }

    reset(reqdata:any){
      return this.httpService.postService("userreset",reqdata,false,{})
    }

    forgot(reqdata:any){
      return this.httpService.postService("userforgot",reqdata,false,{})
    }
}
