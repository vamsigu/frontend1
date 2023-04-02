import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl:string="http://localhost:8000"

  constructor(private http:HttpClient){}

   registerpage(data:any)
   {
    return this.http.post("http://localhost:8000/patients",data);
   }
}
