import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl="http://fundoonotes.incubation.bridgelabz.com/api/user/";

  constructor(private http : HttpClient) { }

     postService(url:string, reqPayload:any, token:boolean,httpAuthOptions:any){
           return this.http.post(this.baseurl + url, reqPayload,token && httpAuthOptions )
     }

}
