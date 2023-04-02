import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getadmins(){
    return this.http.get('http://localhost:90/admin')
  }

  getadmin(id:number){
    return this.http.get(`http://localhost:90/admin/${id}`)
  }

  getadminemail(email:string){
    return this.http.get(`http://localhost:90/admins/${email}`)
  }

  getadminpassword(password:string){
    return this.http.get(`http://localhost:90/Admin/${password}`)
  }
}
