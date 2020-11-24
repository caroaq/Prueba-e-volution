import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpCont } from 'src/app/models/emp-cont';
import { EmpContService } from '../../services/emp-cont.service';

declare var M: any;

@Component({
  selector: 'app-emp-cont',
  templateUrl: './emp-cont.component.html',
  styleUrls: ['./emp-cont.component.css']
})
export class EmpContComponent implements OnInit {

  constructor(public empcontService: EmpContService) { }

  ngOnInit() { 
    this.getEmp_conts();
  }

  addEmp_cont(form: NgForm){
    this.empcontService.postEmp_cont(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Asociación guardada'})
        this.getEmp_conts();
      });
  }

  getEmp_conts(){
    this.empcontService.getEmp_conts()
    .subscribe(res => {
      this.empcontService.emp_conts = res as EmpCont[]
      console.log(res);
    });
  }
  
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empcontService.selectedEmp_cont = new EmpCont();
    }

  }
}
