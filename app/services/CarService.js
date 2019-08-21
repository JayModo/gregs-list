import Car from "./models/car.js";


let _state = {
  cars: [new Car({ make: "chevy", model: "tracker", year: 1989, price: 0, imgUrl: "hjhbkjh", decription: "its a car" })]
}


export default class CarService {

  deletCar(id) {
    let car = _state.cars.find((car, i) => {
      if (car._id == id)
        _state.cars.splice(i)
    })
  }
  addCar(newCar) {
    _state.cars.push(new Car(newCar))
  }

  get Cars() {
    return _state.cars.map(car => new Car(car))

  }
}