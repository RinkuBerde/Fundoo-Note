import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;

  constructor(private fromBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.signinForm = this.fromBuilder.group({
      firstName: ['', Validators.required, [Validators.pattern("^[A-Z]{1}[A-Z a-z]{3,}$")]],
      lastName: ['', Validators.required, [Validators.pattern("^[A-Z]{1}[A-Z a-z]{3,}$")]],
      email: ['', [Validators.required, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-Z a-z 0-9.-]+$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.signinForm.value);
 }
}

