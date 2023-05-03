import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component: SignupComponent },
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'reset',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent, 
    children: [
      {path:'',component:CreatenoteComponent}
    ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
