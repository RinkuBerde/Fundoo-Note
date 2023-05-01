import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { 

  }

    register(reqdata:any){
       return this.httpService.postService("userSignUp",reqdata,false,{});
    }

    login(reqdata:any){
      return this.httpService.postService("userlogin",reqdata,false,{})
    }

    reset(reqdata:any){
      return this.httpService.postService("userreset",reqdata,false,{})
    }

    forgot(reqdata:any){
      return this.httpService.postService("userforgot",reqdata,false,{})
    }
}
