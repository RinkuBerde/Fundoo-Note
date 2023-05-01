import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  signup() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      let reqdata = {
        firstname: this.signupForm.value.firstname,
        lastname: this.signupForm.value.lastname,
        email: this.signupForm.value.email,
        password: this.signupForm.value.confirmPassword,
        service: "advance"
      }
      this.userService.register(reqdata).subscribe((result: any) => {
        console.log("signing successfully", result)
      })
    }
    else
      console.log("data not get");

  }
}
