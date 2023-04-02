import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorloginService {

  constructor(private http:HttpClient) { }

  doctorloginpage(doc_id:number){
    return this.http.get(`http://localhost:60/doctors/${doc_id}`)
  }

  getdoctors(){
    return this.http.get("http://localhost:60/doctors")
  }

  updatedoctor(doc_id:number,data:any){
    return this.http.put(`http://localhost:60/doctors/${doc_id}`,data)
  }

  
}
