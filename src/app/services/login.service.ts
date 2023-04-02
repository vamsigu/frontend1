import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }

  loginpage(pat_id:number){
    return this.Http.get(`http://localhost:8000/patients/${pat_id}`)
  }
  
  getpaitents(){
    return this.Http.get("http://localhost:8000/patients")
  }

  getpatientemail(email:string){
    return this.Http.get(`http://localhost:8000/Patients/${email}`)
  }

  getpatientpassword(password:string){
    return this.Http.get(`http://localhost:8000/patient/${password}`)
  }

}
