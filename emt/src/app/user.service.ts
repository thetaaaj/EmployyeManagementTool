import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url: string = 'localhost:8082/users';
  getAllUser() {
    return this.http.get(this.url);
  }
  createUser(user: any) {
    return this.http.post(this.url, user);
  }
  updateUser(id: number, user: any) {
    return this.http.put(this.url, user)
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
