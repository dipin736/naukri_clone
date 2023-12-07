import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent implements OnInit {

  JobObj:any={
    "JobId": 0,
    "JobName": "",
    "CreatedDate": new Date(),
    "EmployerId": 0,
    "CategoryId": 0,
    "Experience": "",
    "Package": "",
    "Location": "",
    "JobDescription": "",
    "IsActive": true
  }
categoryList:any []=[]

constructor(private job:JobService){
  const userData = localStorage.getItem('JobLoginUser');
  
  console.log('JobLoginUser from localStorage:', userData);

  if (userData != null) {
    const data=JSON.parse(userData)
    this.JobObj.EmployerId=data.employerId
  } 
 
}
  ngOnInit(): void {
    this.getJobCategorties()
  }

  getJobCategorties(){
    this.job.GetAllJobCategory().subscribe((res:any)=>{
      this.categoryList=res.data;
    })
  }

  createJob(){
    this.job.createNewJob(this.JobObj).subscribe((res:any)=>{
      if (res.result){
        alert('Post Created Successfully')
      }
      else{
        alert(res.message)
      }
    })
  }
}
