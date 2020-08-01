import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiRoot: string = 'https://run.mocky.io/v3/0a045509-f93f-4c8b-b66c-a70f20843c35';
  
  constructor(private http: HttpClient) { }

  getApi() {
    return this.http.get(this.apiRoot);
  }
}
