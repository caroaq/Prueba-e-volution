import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { app_routing } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { HomeComponent } from './components/home/home.component';
import { EmpContComponent } from './components/emp-cont/emp-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ContractorsComponent,
    HomeComponent,
    EmpContComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
