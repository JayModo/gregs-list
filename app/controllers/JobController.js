import JobService from "../services/JobService.js";

let _jobService = JobService



function _draw() {
  let template = ''
  let jobs = _jobService.

    jobs.forEach((job) => {
      template += job.Template
    });


  document.querySelector("#jobs").innerHTML = template



}


export default class JobController {
  constructor() {
    console.log("job controller good")
    _draw()
  }



  addJob(event) {
    event.preventDefault()
    let form = event.target

    let newJob = {
      title: form.title.value,

    }

    _jobService.addJob(newJob)
    _draw()
  }
}