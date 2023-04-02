import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  createmember(data:any){
    return this.http.post('http://localhost:50/members',data)
  }

  getmember(member_id:number){
    return this.http.get(`http://localhost:50/members/${member_id}`)
  }

  getmembers(){
    return this.http.get('http://localhost:50/members')
  }


}
