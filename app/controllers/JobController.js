import JobService from "../services/JobService.js";

let _jobService = JobService



function _draw() {
  let template = ''
  let Jobs = _jobService.Jobs
  debugger
  Jobs.forEach((job) => {
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
      pay: form.pay.value,
      positionDescription: form.positionDescription.value,
      company: form.company.value

    }
    _jobService.addJob(newJob)
    _draw()
  }
}