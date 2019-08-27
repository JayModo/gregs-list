



export default class Car {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 4000)
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description || "there is no description"
  }

  get Template() {
    return `
      < div class="col-3" >
        <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${this.year} - ${this.make} - ${this.model}</h5>
              <p class="card-text">${this.description}</p>
              <p><sm>${this.price}</sm></p>
              <button class="btn btn-info" onclick="app.controllers.carController.bid('${this._id}')">Bid</button>
              <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar('${this._id}')">Delete Car</button>
            </div >
            </div >
        </div >
            `
  }




}