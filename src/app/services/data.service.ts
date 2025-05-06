import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7123/data'
  constructor(private http: HttpClient) { }

  salvarData(data: String){
    return this.http.post(this.apiUrl, {data});
  }

  getData(){
    return this.http.get<{ data: string }>(`${this.apiUrl}`);
  }
}
