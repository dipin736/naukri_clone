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
  constructor(private activatedRoute:ActivatedRoute,private job:JobService){
    this.activatedRoute.params.subscribe((res:any)=>{
      debugger;
      this.activeJobId=res.jobid
      this.getJobDetail();
    })
  }

  getJobDetail(){
    this.job.GetJobListingById(this.activeJobId).subscribe((res:any)=>{
      this.jobObj=res.data
    })
  }
}
