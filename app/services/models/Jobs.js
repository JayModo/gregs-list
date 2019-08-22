

export default class Job {
  constructor(data) {
    this.title = data.title
    this.pay = data.pay
    this.positionDescription = data.positionDescription
    this.company = data.company
  }

  get template() {
    return `
    <div class="col-12">Make a job
        <h1>${this.company}</h1>
        <h3>${this.pay}</h3>
        <h3>${this.positionDescription}</h3>
        <h3>${this.title}</h3>
        
        `
  }





}