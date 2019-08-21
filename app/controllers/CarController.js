import CarService from "../services/CarService.js";


let _carService = new CarService


//draw the cars
//get cars form service
//element inject to the cars template info
function _draw() {
  let template = ''
  let cars = _carService.Cars
  //check back to d$ copy to fix this
  cars.forEach((car, index) => {
    // template += car.Template
    //template += `<button onclick="app.controllers.carController.deleteCar(${index})" > Delete Car </button>`
  })

  //same as above
  // for (let i = 0; i < cars.length; i++) {
  // const car = cars[i];

  //}

  document.querySelector('#cars').innerHTML = template



}




export default class CarController {
  constructor() {
    console.log("controller")
    _draw()
  }

  deleteCar(index) {
    _carService
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
    _draw()

  }


}