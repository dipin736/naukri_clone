import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj:any={
    "UserName": "",
    "Password": ""
  }
  constructor(private job:JobService, private router:Router) { }

  onLogin(){
    console.log('Attempting login with:', this.loginObj);
    this.job.login(this.loginObj).subscribe((res:any)=>{
      console.log('Login response:', res);
      if (res.result){
        alert('User Logged in Success')
        localStorage.setItem('JobLoginUser',JSON.stringify(res.data))
        console.log('JobLoginUser from localStorage:', localStorage.getItem('JobLoginUser'));
        this.router.navigateByUrl('/home')
      }
      else{
        alert(res.message)
      }
    })
  }
}
