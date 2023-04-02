import { Injectable } from '@angular/core';
import { Availability } from './shared/availability.model';
import { Doctor } from './shared/doctor.model';
import { Doctor1 } from './shared/doctor1.model';
import { Patient } from './shared/patient.model';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  appointments = []
  patients:Patient[] = []

  doctors:Doctor[] = [
    new Doctor("Ajay.K","Oncologist","https://th.bing.com/th/id/OIP.RxhQ2nMqf7hwsx884qzCpAHaE8?pid=ImgDet&rs=1"),
    new Doctor("Priya.A","Gynacologist","https://th.bing.com/th/id/OIP.9LaFPzNRvYpM7zCGTTikBgHaE8?pid=ImgDet&rs=1"),
    new Doctor("Manideep.K","Cardiologist","https://medworldsolutions.in/wp-content/uploads/2017/04/team-member-5-768x768.jpg"),
    new Doctor("Eswar.B","Dermatologist","https://republicanyemen.net/wp-content/uploads/2020/02/Yemeni-doctor-in-China-399x405.jpg")
  ]

  doctors1: Doctor1[] = [
    new Doctor1("Ajay.K","Oncologist","https://th.bing.com/th/id/OIP.RxhQ2nMqf7hwsx884qzCpAHaE8?pid=ImgDet&rs=1","ajay@gmail.com","9812543321",[new Availability("Monday"),new Availability("Wednessday"),new Availability("Thursday")]),
    new Doctor1("Priya.A","Gynacologist","https://th.bing.com/th/id/OIP.9LaFPzNRvYpM7zCGTTikBgHaE8?pid=ImgDet&rs=1","priya@gmail.com","9564231456",[new Availability("Monday"),new Availability("Tuesday"),new Availability("Wednessday"),new Availability("Thursday"),new Availability("Friday")]),
    new Doctor1("Manideep.K","Cardiologist","https://medworldsolutions.in/wp-content/uploads/2017/04/team-member-5-768x768.jpg","manideep@gmail.com","9123765321",[new Availability("Tuesday"),new Availability("Thursday"),new Availability("Saturday")]),
    new Doctor1("Eswar.B","Dermatologist","https://republicanyemen.net/wp-content/uploads/2020/02/Yemeni-doctor-in-China-399x405.jpg","eswar@gmail.com","9045213476",[new Availability("Monday"),new Availability("Saturday"),new Availability("Sunday")])
  ]

  doctoremail:any
  patientemail:any



  getdoctor(id:number){
    return this.doctors1[id]
  }

  

}
