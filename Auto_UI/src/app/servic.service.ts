import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicService {

  constructor(private http: HttpClient) { }
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseServerURL = "http://localhost:5105/api/";

  // chat() {
  //   return this.http.get(this.baseServerURL + 'customer-counts', { responseType: 'json' });
  // };
  chat(lastMessage: string) {
    const url = `${this.baseServerURL}chat/${lastMessage}`;
    return this.http.get(url, { responseType: 'json' });
  }


}
