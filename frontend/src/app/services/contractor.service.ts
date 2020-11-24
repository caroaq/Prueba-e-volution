import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contractor } from '../models/contractor';
import { ContractorsComponent } from '../components/contractors/contractors.component';

@Injectable({
  providedIn: 'root' 
})
export class ContractorService {

selectedContractor: Contractor;
contractors: Contractor[];
readonly URL_API = 'http://localhost:3000/api/contractors';

  constructor(private http: HttpClient) { 
    this.selectedContractor = new Contractor();
  }

  getContractors() {
    return this.http.get(this.URL_API);
  }
 
  postContractor(Contractor: Contractor){
    return this.http.post(this.URL_API, Contractor);
  }

  putContractor(contractor: Contractor){
    return this.http.put(this.URL_API +  `/${contractor._id}`, contractor);
  }

  deleteContractor(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
