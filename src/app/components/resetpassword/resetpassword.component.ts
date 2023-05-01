import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    });
  }
  onreset() {
    if (this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value)
      let data = {
        password: this.resetPasswordForm.value.password,
        confirmpassword: this.resetPasswordForm.value.confirmpassword,
        service: "advance"

      }
      // console.log(data)
      this.userService.reset(data).subscribe((result: any) => {
        console.log(" successfully", result);
      })
    }
    else
      console.log("data not get");
  }

}

