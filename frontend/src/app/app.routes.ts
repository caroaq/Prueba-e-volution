import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { HomeComponent } from './components/home/home.component';
import { EmpContComponent } from './components/emp-cont/emp-cont.component';

const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'empleados', component: EmployeesComponent},
  {path: 'contratistas', component: ContractorsComponent},
  {path: 'asociaciones', component: EmpContComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
