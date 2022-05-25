import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }

  querry = Math.floor(Math.random() * (100 - 1)) + 1;

  constructor(private http: HttpClient) { }

  getApiData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/')
  }

  getRandomData() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.querry}/comments`)
    //return console.log("random data");
  }
}
