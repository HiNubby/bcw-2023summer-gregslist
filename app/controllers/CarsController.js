import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  const cars = AppState.cars
  let template = ''

  cars.forEach(car => template += car.HTMLTemplate)

  setHTML('carListings', template)
}


export class CarsController {
  constructor() {
    // SECTION page load
    console.log('Cars Controller is loaded, here are the cars', AppState.cars);
    _drawCars()


    // SECTION state changes
    AppState.on('cars', _drawCars)
  }


  createCar(event) {
    event.preventDefault()
    console.log('Did the form submit?');

    const form = event.target

    const carData = getFormData(form)

    carData.ownedByGrandma = carData.ownedByGrandma == 'on' ? true : false

    console.log('car data!', carData);

    carsService.createCar(carData)

    form.reset()

  }

  async deleteCar(carId) {
    const wantsToDelete = await Pop.confirm('Do you really want to delete this car?')


    if (!wantsToDelete) {
      return
    }

    carsService.deleteCar(carId)

  }
}