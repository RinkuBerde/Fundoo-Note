import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor( private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onlogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: "advance"
      }
      // console.log(data)
      this.userService.login(data).subscribe((result: any) => {
        console.log("login successfully", result);
        localStorage.setItem('token',result.id);
        this.router.navigateByUrl('/dashboard')
        
      })
    }
    else
      console.log("data not get");
  }

}