import CarService from "../services/CarService.js";



let _carService = new CarService


//draw the cars
//get cars form service
//element inject to the cars template info
function _draw() {
  let cars = _carService.Cars
  let template = ''
  cars.forEach(c => template += c.Template)
  document.getElementById('car-cards').innerHTML = template
  //template += `<button onclick="app.controllers.carController.deleteCar(${index})" > Delete Car </button>`
}

//same as above
// for (let i = 0; i < cars.length; i++) {
// const car = cars[i];

//}

export default class CarController {
  constructor() {
    _carService.addSubscriber('cars', _draw)
    _carService.getApiCars()
  }

  addCar(event) {
    event.preventDefault()
    let form = event.target
    let newCar = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      description: form.description.value,
      price: form.price.value,

    }
    _carService.addCar(newCar)
    form.reset()

  }

  deleteCar(id) {
    if (window.confirm("are you sure")) {
      _carService.deleteCar(id)
    }
  }
  bid(id) {
    _carService.bid(id)
  }

}

