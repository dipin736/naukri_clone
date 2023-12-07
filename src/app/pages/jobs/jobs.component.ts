import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobList:any[]=[]
  constructor(private job:JobService,private router:Router){}

  ngOnInit(): void {
    this.loadJobs()
  }
  loadJobs(){
    this.job.GetActiveJobs().subscribe((res:any)=>{
      this.jobList=res.data;
      console.log("joblist",this.jobList)
    })
  }

  openJob(id:number){
    this.router.navigate(['/job-details',id])
  }
}
