import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: [] = [];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
    // .pipe(map(res => console.log(res)));
    // console.log(usersResponse);
  }
}
