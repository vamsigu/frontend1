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
}
