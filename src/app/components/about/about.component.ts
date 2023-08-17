import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   username: string ="";
   password: string ="";
  value?:number;

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

   checkAuth() {
     let status="";
     if (!this.username || !this.password) {
       alert("Username and Password is required")
       return;
     }
     if(this.username && this.password) {
       // todo api call for check the user is valid or not
       console.log("hi")
     }
     status = "Error message coming from api point"
     console.log(status)
   }

}
