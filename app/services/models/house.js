
console.log("this is the house")

export default class House {
  constructor(data) {
    this.type = data.type
    this.sqft = data.sqft
    this.houseYear = data.houseYear
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.description = data.description || "there is no description"
  }

  get template() {
    return `
    <div class="col-4 border">
  <h1>${this.type}</h1>
  <h3>${this.sqft}</h3>
  <img
    src="${this.imgUrl}"
    alt="">
    <h3>${this.price}</h3>
    <h3>${this.houseYear}</h3>
    <h3>${this.description}</h3>
              
              `
  }

} 