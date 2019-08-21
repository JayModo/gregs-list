



export default class Car {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 4000)
    this.make = data.make
    this.model = data.model
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description || "there is no description"
  }

  get Template() {
    return `
    <div class="col-4 border">
    <h1>${this.make}</h1>
    <h3>${this.model}</h3>
    <img src="${this.imgUrl}" alt="">
    <h3>${this.price}</h3>
    <h3>${this.year}</h3>
    <p>${this.description}</p>
    
    `
  }


}