import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {

  activeJobId:number=0
  jobObj:any
  userInfo: any;
  isLoggedIn: boolean=false

  jobApplicationObj={
      "ApplicationId": 0,
      "JobId": 0,
      "JobSeekerId": 0,
      "AppliedDate": "2023-12-09T04:14:44.097Z",
      "ApplcationStatus": "New"
    
  }
  constructor(private activatedRoute:ActivatedRoute,private job:JobService){
    const userData = localStorage.getItem('JobLoginUser');
  
    console.log('JobLoginUser from localStorage:', userData);
  
    if (userData === null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
      this.jobApplicationObj.JobSeekerId=this.userInfo.jobSeekerId;
    }
    console.log('isLoggedIn:', this.isLoggedIn);
    console.log('userInfo:', this.userInfo);
    this.activatedRoute.params.subscribe((res:any)=>{
      debugger;
      this.activeJobId=res.jobid
      this.getJobDetail();
      this.jobApplicationObj.JobId=this.activeJobId;

    })
  }

  getJobDetail(){
    this.job.GetJobListingById(this.activeJobId).subscribe((res:any)=>{
      this.jobObj=res.data
    })
  }

  apply(){
    this.job.SendJobApplication(this.jobApplicationObj).subscribe((res:any)=>{
      if (res.result){
        alert('You Have Successfully Applied to the Job')
      }
      else{
        alert(res.message)
      }
    })
  }
}
