import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'naukri_clone';
  isLoggedIn: boolean = false;
  userInfo: any = {}; // Initialize with an empty object
  
  constructor() {
    const userData = localStorage.getItem('JobLoginUser');
  
    console.log('JobLoginUser from localStorage:', userData);
  
    if (userData === null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
    }
    console.log('isLoggedIn:', this.isLoggedIn);
    console.log('userInfo:', this.userInfo);
  }
  
  logoff(){
    localStorage.removeItem('JobLoginUser')
    this.isLoggedIn = false;

  }
}
