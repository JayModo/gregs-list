import JobService from "../services/JobService.js";

let _jobService = new JobService



function _draw() {
  let jobs = _jobService.jobs
  let template = ''
  jobs.forEach(j => template += j.template)
  document.getElementById('job-cards').innerHTML = template

}


export default class JobController {
  constructor() {
    _jobService.addSubscriber('jobs', _draw)
    _jobService.getApiJobs()
  }
  deleteJob(id) {
    if (window.confirm("are you sure")) {
      _jobService.deleteJob(id)
    }
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