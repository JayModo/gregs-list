import Job from "./models/Jobs.js";




let _state = {
  jobs: [new Job({
    title: "CEO",
    company: "Big Buisness",
    pay: .05,
    positionDescription: "words words words words words words"

  })]
}



export default class JobService {
  constructor() {
    console.log("job services online")
  }



  addJob(newJob) {
    _state.jobs.push(new Job)
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }


}