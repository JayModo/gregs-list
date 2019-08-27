import Car from "./Models/car.js";
// @ts-ignore
let _carApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/cars'
})

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

let _subscribers = {
  cars: []
}
function _setState(propName, data) {
  //NOTE add the data to the state
  _state[propName] = data
  //NOTE run every subscriber function that is watching that data
  _subscribers[propName].forEach(fn => fn());
}
export default class CarService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Cars() {
    return _state.cars.map(car => new Car(car))

  }
  getApiCars() {
    _carApi.get()
      .then(res => {
        let carsData = res.data.data.map(c => new Car(c))
        _setState('cars', carsData)
      })
      .catch(err => {
        console.error(err)
      })
  }


  //delete has to be collection name/ id/ subcolleciton
  //_carApi.delete(id)
  addCar(newCar) {
    _carApi.post('', newCar)
      .then(res => {
        _state.cars.push(res.data.data)
        _setState('cars', _state.cars)
      })
      .catch(err => {
        console.error(err)
      })
  }

  deleteCar(id) {
    _carApi.delete(id)
      .then(res => {
        let index = _state.cars.findIndex(car => car._id == id)
        _state.cars.splice(index, 1)
        _setState('cars', _state.cars)
      })
      .catch(err => {
        console.error(err)
      })
  }
  bid(id) {
    //find the object, increase its price by $1
    let car = _state.cars.find(c => c._id == id)
    car.price++
    //NOTE put will require the id, and the body with the update
    _carApi.put(id, { price: car.price })
      .then(res => {
        _setState('cars', _state.cars)
      })
  }
  //addCar(newCar) {
  //_state.cars.push(new Car(newCar))
  //adding data to the api  for a post
}
