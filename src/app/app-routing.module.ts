import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminAppointmentComponent } from "./admin/admin-appointment/admin-appointment.component";
import { AdminComponent } from "./admin/admin.component";
import { AppointmentDetailComponent } from "./appointment-detail/appointment-detail.component";
import { AppointmentEditComponent } from "./appointment-edit/appointment-edit.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { BookedComponent } from "./booked/booked.component";
import { BookingComponent } from "./booking/booking.component";
import { DoctorAppointmentComponent } from "./doctor-appointment/doctor-appointment.component";
import { DoctorDetailComponent } from "./doctor-detail/doctor-detail.component";
import { DoctorEditComponent } from "./doctor-edit/doctor-edit.component";
import { DoctorLoginComponent } from "./doctor-login/doctor-login.component";
import { DoctorRegisterComponent } from "./doctor-register/doctor-register.component";
import { DoctorStartComponent } from "./doctor-start/doctor-start.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { DoctorviewComponent } from "./doctorview/doctorview.component";
import { HomeStartComponent } from "./home-start/home-start.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./home/login/login.component";
import { RegisterComponent } from "./home/register/register.component";
import { MebershipComponent } from "./mebership/mebership.component";
import { PaymentComponent } from "./payment/payment.component";

const routes:Routes = [
    {path:"", component:HomeComponent,children:[
        {path:"",component:HomeStartComponent}
    ]},
    {path:"login", component:LoginComponent},
    {path:"doctorlogin",component:DoctorLoginComponent},
    {path:"adminlogin",component:AdminLoginComponent},
    {path:"doctorregister",component:DoctorRegisterComponent},
    {path:"profile",component:DoctorviewComponent},
    {path:"doctorappointment",component:DoctorAppointmentComponent},
    {path:"register", component:RegisterComponent},
    {path:"home", redirectTo: "", pathMatch: 'full'},
    {path:"membership", component:MebershipComponent},
    {path:"doctor", component:DoctorComponent,children:[
        {path:"",component:DoctorStartComponent},
        {path:":id", component:DoctorDetailComponent},
        {path:":id/booking", component:BookingComponent}
    ]},
    {path:"payment",component:PaymentComponent},
    {path:"booked", component:BookedComponent},
    {path:"appointment",component:AppointmentComponent,children:[
        {path:':id',component:AppointmentDetailComponent},
        {path:':id/edit',component:AppointmentEditComponent}
    ]},
    {path:"admin",component:AdminComponent,children:[
        {path:"",component:DoctorStartComponent},
        {path:"new",component:DoctorEditComponent},
        {path:":id",component:DoctorEditComponent}
    ]},
    {path:"adminappointments",component:AdminAppointmentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}