
console.log("this is the house")

export default class House {
  constructor(data) {
    this._id = data._id
    this.levels = data.levels
    this.bedrooms = data.bedrooms
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.description = data.description || "there is no description"
  }

  get template() {
    return `
        <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.year} - ${this.levels} - ${this.bedrooms}</h5>
                    <p class="card-text">${this.description}</p>
                    <p><sm>${this.price}</sm></p>
                    <button class="btn btn-info" onclick="app.controllers.carCtrl.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.carCtrl.delete('${this._id}')">Delete Car</button>
                </div >
            </div >
        </div >
            `
  }

} 