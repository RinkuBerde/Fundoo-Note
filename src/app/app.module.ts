import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotPasswordComponent,
    SigninComponent,
    DashboardComponent,
    GetallnotesComponent,
    CreatenoteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatListModule,
    MatToolbarModule,
    MatIconModule, 
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
