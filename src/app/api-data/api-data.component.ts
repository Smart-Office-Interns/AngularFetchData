import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  users: any;
  randomUsers: any;
  isDisplay = false;
  userDisplayStyle!: string;
  randomDisplayStyle!: string;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getApiData().subscribe(data => {
      this.users = data;
    });

    this._http.getRandomData().subscribe(data0 => {
      this.randomUsers = data0;
    });

    this.userDisplayStyle = 'userList';
    this.randomDisplayStyle = 'randomList';
  }

  submit() {
    if (this.userDisplayStyle = 'userList') {
      this.userDisplayStyle = 'submitUserList';
    } else {
      console.error();
    }

    if (this.randomDisplayStyle = 'randomList') {
      this.randomDisplayStyle = 'submitRandomList';
    } else {
      console.error();
    }

  }

}
