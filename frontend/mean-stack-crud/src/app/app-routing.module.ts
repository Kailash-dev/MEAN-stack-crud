import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
