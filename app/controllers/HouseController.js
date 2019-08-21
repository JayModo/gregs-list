import HouseService from "../services/HouseService.js";


let _houseService = new HouseService

function _draw() {
  let template = ''
  let houses = _houseService.Houses



  houses.forEach((house) => {
    template += house.template
  })



  document.querySelector("#houses").innerHTML = template

}





export default class HouseController {
  constructor() {
    console.log("house controller")
    _draw()
  }


  addHouse(event) {
    event.preventDefualt()
    let form = event.target



    let newHouse = {
      type: form.type.value,
      sqft: form.sqft.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
      price: form.price.value,
      description: form.description.value
    }


    _houseService.addHouse(newHouse)
    _draw()
  }


}