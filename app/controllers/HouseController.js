import HouseService from "../services/HouseService.js";


let _houseService = new HouseService

function _draw() {
  let houses = _houseService.Houses
  let template = ''
  houses.forEach(h => template += h.template)
  document.getElementById('house-cards').innerHTML = template
}






export default class HouseController {
  constructor() {
    _houseService.addSubscriber('houses', _draw)
    console.log("house controller")

    _houseService.getApiHouse()
  }


  addHouse(event) {
    event.preventDefualt()
    let form = event.target
    let newHouse = {
      type: form.type.value,
      sqft: form.sqft.value,
      imgUrl: form.sqft.value,
      price: form.price.value,
      houseYear: form.houseYear.value,
      description: form.description.value,
    }
    _houseService.addHouse(newHouse)
    form.reset()
  }
  delete(id) {
    if (window.confirm('are you sure?')) {
      _houseService.deleteHouse(id)
    }
  }

}