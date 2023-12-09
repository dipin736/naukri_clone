import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  userInfo: any;
  jobList:any[]=[]
  
  ngOnInit(): void {
    
  }

  constructor(private job:JobService){
    const userData = localStorage.getItem('JobLoginUser');
    console.log('JobLoginUser from localStorage:', userData);
    if (userData !== null) {
      this.userInfo = JSON.parse(userData)
      this.GetJobsByEmployer()
    } 
  }

  GetJobsByEmployer(){
    this.job.GetJobsByEmployerId(this.userInfo.employerId).subscribe((res:any)=>{
      this.jobList=res.data;
    })
  }

}
