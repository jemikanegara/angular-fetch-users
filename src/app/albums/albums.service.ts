import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  albums: any[] = [];
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/albums");
  }
}
