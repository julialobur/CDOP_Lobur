import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private apiUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) { }

  getVoters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}