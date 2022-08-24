import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './services/auth/auth.component';
import { AuthRoutingRoutingModule } from './auth-routing-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { LoginFormHeaderComponent } from './components/login-form-header/login-form-header.component';
import { LoginFormFooterComponent } from './components/login-form-footer/login-form-footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    LoginFormHeaderComponent,
    LoginFormFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingRoutingModule
  ]
})
export class AuthModule { }
