import House from "./models/house.js";



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

export default class HouseService {
  constructor() {
    console.log("house services")
  }


  addHouse(newHouse) {
    _state.houses.push(new House(newHouse))
  }




  get Houses() {
    return _state.houses.map(houses => new House(House))
  }


}


