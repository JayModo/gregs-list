import Job from "./models/Jobs.js";

// @ts-ignore
let _jobApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jobs'
})


let _state = {
  jobs: [new Job({
    title: "CEO",
    company: "Big Buisness",
    pay: .05,
    positionDescription: "words words words words words words"

  })]
}
let _subscribers = {
  jobs: []
}
function _setState(propName, data) {
  //NOTE add the data to the state
  _state[propName] = data
  //NOTE run every subscriber function that is watching that data
  _subscribers[propName].forEach(fn => fn());
}


export default class JobService {
  addSubscriber(jobs, fn) {
    _subscribers[jobs].push(fn)
  }

  // addJob(newJob) {
  // _state.jobs.push(new Job(newJob))
  //}




  get jobs() {
    return _state.jobs.map(job => new Job(job))
  }

  getApiJobs() {
    _jobApi.get()
      .then(res => {
        let jobsData = res.data.data.map(j => new Job(j))
        _setState('jobs', jobsData)
      })
      .catch(err => {
        console.error(err)
      })
  }

  deleteJob(id) {
    _jobApi.delete(id)
      .then(res => {
        let index = _state.jobs.findIndex(job => job._id == id)
        _state.cars.splice(index, 1)
        _setState('jobs', _state.jobs)
      })
      .catch(err => {
        console.error(err)
      })
  }
  addJob(newJob) {
    _jobApi.post('', newJob)
      .then()
      .catch(err => {
        console.error(err)
      })
  }



}


