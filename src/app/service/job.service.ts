import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiEndPoint="https://freeapi.miniprojectideas.com/api/JobPortal/"  
  
  constructor(private  http:HttpClient) { }


  registerEmployer(obj:any){
    return this.http.post(this.apiEndPoint+ 'AddNewEmployer',obj)
  }
  registerJobSeeker(obj:any){
    return this.http.post(this.apiEndPoint+ 'AddNewJobSeeker',obj)
  }

  login(obj:any){
    return this.http.post(this.apiEndPoint+ 'Login',obj)
  }

  GetAllJobCategory(){
    return this.http.get(this.apiEndPoint+ 'GetAllJobCategory')
  }
  
  createNewJob(obj:any){
    return this.http.post(this.apiEndPoint+ 'CreateNewJobListing',obj)
  }

  GetActiveJobs(){
    return this.http.get(this.apiEndPoint+ 'GetActiveJobListing')
  }

  GetJobListingById(jobid:number){
    return this.http.get(this.apiEndPoint+ 'GetJobListingById?jobId='+ jobid)
  }

  SendJobApplication(obj:any){
    return this.http.post(this.apiEndPoint+ 'SendJobApplication',obj)
  }

  GetJobsByEmployerId(employerid:number){
    return this.http.get(this.apiEndPoint+ 'GetJobsByEmployerId?employerid=' + employerid)
  }
}
