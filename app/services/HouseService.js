import House from "./models/house.js";

// @ts-ignore
let _houseApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/houses'
})


let _state = {
  houses: [new House({
    type: "colonial",
    sqft: 5000,
    houseYear: 1990,
    imgUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: 100000,
    description: "this is a hrme"
  })]

}
let _subscribers = {
  houses: []
}
function _setState(propName, data) {
  //NOTE add the data to the state
  _state[propName] = data
  //NOTE run every subscriber function that is watching that data
  _subscribers[propName].forEach(fn => fn());
}

export default class HouseService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Houses() {
    return _state.houses.map(h => new House(h))
  }
  getApiHouse() {
    _houseApi.get()
      .then(res => {
        let houseData = res.data.data.map(h => new House(h))
        _setState('houses', houseData)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addHouse(newHouse) {
    _houseApi.post('', newHouse)
      .then(res => {
        _state.houses.push(res.data.data)
        _setState('houses', _state.houses)
      })
      .catch(err => {
        console.error(err)
      })

  }

  deleteHouse(id) {
    _houseApi.delete(id)
      .then(res => {
        let index = _state.houses.findIndex(house => house._id == id)
        _state.houses.splice(index, 1)
        _setState('houses', _state.houses)
      })
      .catch(err => {
        console.error(err)
      })

  }





}


