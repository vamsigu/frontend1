import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorregisterService {

  constructor(private http:HttpClient) { }

  doctorregister(data:any){
    return this.http.post("http://localhost:60/doctors",data)
  }
}
