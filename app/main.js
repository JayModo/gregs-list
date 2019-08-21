import CarController from "./controllers/CarController.js";
import HouseController from "./controllers/HouseController.js";




class App {
  constructor() {
    this.controllers = {
      carController: new CarController,
      houseController: new HouseController
    }
  }
}

window['app'] = new App()