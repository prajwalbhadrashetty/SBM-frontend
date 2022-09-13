import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingReportService {

  baseUrl = environment.serviceapi;

  constructor(private http:HttpClient) { }

  getbookings() {
    const headers=new HttpHeaders({
      Authorization:'Bearer '+localStorage.getItem('token')
    })
    return this.http.get(`${this.baseUrl}/servicereq`,{headers:headers});
  }

  getreports() {
    const headers=new HttpHeaders({
      Authorization:'Bearer '+localStorage.getItem('token')
    })
    return this.http.get(`${this.baseUrl}/servicereq/report`,{headers:headers});
  }

  addbooking(booking:any){
    const headers=new HttpHeaders({
      Authorization:'Bearer '+localStorage.getItem('token')
    })
    return this.http.post(`${this.baseUrl}/servicereq`,booking,{headers:headers});
  }

  addreport(report:any){
    const headers=new HttpHeaders({
      Authorization:'Bearer '+localStorage.getItem('token')
    })
    return this.http.post(`${this.baseUrl}/servicereq/report`,report,{headers:headers});
  }

  updatebooking(booking:any){
    const headers=new HttpHeaders({
      Authorization:'Bearer '+localStorage.getItem('token')
    })
    return this.http.put(`${this.baseUrl}/servicereq`,booking,{headers:headers} );
  }

  updatereport(report:any){
    const headers=new HttpHeaders({
      Authorization:'Bearer '+localStorage.getItem('token')
    })
    return this.http.put(`${this.baseUrl}/servicereq`,report,{headers:headers} );
  }

  deletebooking(id:any){
    return this.http.delete(`${this.baseUrl}/servicereq?id=`+ id);
  }

  deletereport(id:any){
    const headers=new HttpHeaders({
      Authorization:'Bearer '+localStorage.getItem('token')
    })
    return this.http.delete(`${this.baseUrl}/servicereq/report/`+ id,{headers:headers});
  }

}
