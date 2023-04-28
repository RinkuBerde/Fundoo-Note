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
      return this.httpService.postService("login",reqdata,false,{})
    }
}
