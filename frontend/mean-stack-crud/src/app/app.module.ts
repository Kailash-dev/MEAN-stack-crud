import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
