import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Contractor } from 'src/app/models/contractor';
import { ContractorService} from '../../services/contractor.service';

declare var M: any; 

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css'],
  providers: [ContractorService]
})
export class ContractorsComponent implements OnInit {

  constructor(public contractorService: ContractorService ) { }

  ngOnInit() {
    this.getContractors();
  }

  addContractor(form: NgForm){
    if(form.value._id){
      this.contractorService.putContractor(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Contratista actualizado'});
          this.getContractors();
        })
    } else {
      this.contractorService.postContractor(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Contratista guardado'});
          this.getContractors();
        });
    }
  
  }

  getContractors() {
    this.contractorService.getContractors()
    .subscribe(res => {
      this.contractorService.contractors = res as Contractor[]
      console.log(res);
    });
  }

  editContractor(contractor: Contractor){
    this.contractorService.selectedContractor = contractor;
  }

  deleteContractor(_id: string) {
    if(confirm("¿Está seguro que desea eliminar?")) {
      this.contractorService.deleteContractor(_id)
      .subscribe(res => {
        this.getContractors();
        M.toast({html: 'Contratista eliminado'});
      }); 
    }
    
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contractorService.selectedContractor= new Contractor();
    }

  }
}
