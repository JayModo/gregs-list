

export default class Job {
  constructor(data) {
    this._id = data._id
    this.jobTitle = data.jobTitle
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
    this.company = data.company
  }

  get template() {
    return `
      

        <div class="card">
          <img class="card-img-top" src="${this.hours}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${this.jobTitle} - ${this.company} - ${this.description}</h5>
<p><sm>${this.rate}</sm></p>
              <button class="btn btn-info" onclick="app.controllers.jobController.bid('${this._id}')">Bid</button>
              <button class="btn btn-danger" onclick="app.controllers.jobController.delete('${this._id}')">Delete</button>
            </div >
            </div >
        
            `





  }





}