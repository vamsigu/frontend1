import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  appointmentpage(data:any){
    return this.http.post("http://localhost:40/appointment",data)
  }

  getappointments(){
    return this.http.get("http://localhost:40/appointment")
  }

  getappointment(appoint_id:number){
    return this.http.get(`http://localhost:40/appointment/${appoint_id}`)
  }

  getdoctorappointment(doc_name:string){
    return this.http.get(`http://localhost:40/appointments/${doc_name}`)
  }

  updateappointment(appoint_id:number,data:any){
    return this.http.put(`http://localhost:40/appointment/${appoint_id}`, data)
  }
}
