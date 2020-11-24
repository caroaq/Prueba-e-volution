import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpCont } from '../models/emp-cont';

@Injectable({
  providedIn: 'root'
})
export class EmpContService {

selectedEmp_cont : EmpCont;
emp_conts: EmpCont[];
readonly URL_API = 'http://localhost:3000/api/employees_contractors'  
  
  constructor( private http: HttpClient) {
    this.selectedEmp_cont = new EmpCont();
   }
  
   getEmp_conts() {
     return this.http.get(this.URL_API);
   }
  
   postEmp_cont(Emp_cont: EmpCont) {
     return this.http.post(this.URL_API, Emp_cont);
   }
   
}
