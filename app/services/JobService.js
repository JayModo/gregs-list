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
  static addJob(newJob) {
    _state.jobs.push(new Job(newJob))
  }




  get jobs() {
    return _state.jobs.map(job => new Job(job))
  }


}

JobService.Jobs = undefined;
