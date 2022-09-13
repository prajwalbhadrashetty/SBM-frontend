import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.api;

  constructor(private http: HttpClient) {}

  signup(customer) {
    return this.http.post(`${this.baseUrl}/customer/signup`, customer);
  }

  login(customer) {
    return this.http.post(`${this.baseUrl}/customer/login`, customer);
  }

  getUsers() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  addUser(user:any){
    const headers = new HttpHeaders({
      Authorization: 'Bearer '+localStorage.getItem('token')
    });
    return this.http.post(`${this.baseUrl}/user`,user,{headers:headers});
  }

  updateUser(user:any){
    const headers = new HttpHeaders({
      Authorization: 'Bearer '+localStorage.getItem('token')
    });
    return this.http.put(`${this.baseUrl}/user`,user,{headers:headers});
  }

  deleteUser(id:any){
    const headers = new HttpHeaders({
      Authorization: 'Bearer '+localStorage.getItem('token')
    });
    return this.http.delete(`${this.baseUrl}/deleteUsers?id=`+ id,{headers:headers});
  }

  addBooking(data) {
    return this.http.post(`${this.baseUrl}/service/addBooking`, data);
  }

  cancelBooking(id) {
    return this.http.delete(`${this.baseUrl}/service/cancelBooking/${id}`);
  }

  getBookings(id) {
    return this.http.get(`${this.baseUrl}/bookings/${id}`);
  }
}
