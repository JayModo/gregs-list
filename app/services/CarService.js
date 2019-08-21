import Car from "./models/car.js";


let _state = {
  cars: [new Car({
    make: "chevy",
    model: "tracker",
    year: 1989,
    price: 0,
    imgUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    decription: "its a car"
  })]
}


export default class CarService {

  deletCar(id) {
    let car = _state.cars.find((car, i) => {
      if (car._id == id)
        _state.cars.splice(i, 1)
    })
  }
  addCar(newCar) {
    _state.cars.push(new Car(newCar))
  }

  get Cars() {
    return _state.cars.map(car => new Car(car))

  }
}