import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MebershipComponent } from './mebership/mebership.component';
import { AppService } from './app.service';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorItemComponent } from './doctor/doctor-item/doctor-item.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BookingComponent } from './booking/booking.component';
import { Header1Component } from './header1/header1.component';
import { PaymentComponent } from './payment/payment.component';
import { BookedComponent } from './booked/booked.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorviewComponent } from './doctorview/doctorview.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { Header2Component } from './header2/header2.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { HomeStartComponent } from './home-start/home-start.component';
import { DoctorStartComponent } from './doctor-start/doctor-start.component';
import { Header3Component } from './header3/header3.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { Header4Component } from './header4/header4.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDoctorComponent } from './admin/admin-doctor/admin-doctor.component';
import { AdminAppointmentComponent } from './admin/admin-appointment/admin-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorListComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MebershipComponent,
    DoctorDetailComponent,
    DoctorItemComponent,
    DoctorComponent,
    BookingComponent,
    Header1Component,
    PaymentComponent,
    BookedComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    DoctorviewComponent,
    AppointmentEditComponent,
    Header2Component,
    DoctorAppointmentComponent,
    HomeStartComponent,
    DoctorStartComponent,
    Header3Component,
    AdminLoginComponent,
    DoctorEditComponent,
    Header4Component,
    AdminComponent,
    AdminDoctorComponent,
    AdminAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
