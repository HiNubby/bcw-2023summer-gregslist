import { generateId } from "../utils/generateId.js"

export class Car {
  constructor(data) {
    // NOTE generates a unique identifier so we can find specific items in our appstate
    this.id = generateId()
    this.img = data.img
    this.year = data.year
    this.make = data.make
    this.model = data.model
    this.miles = data.miles
    this.price = data.price
    this.description = data.description || "It's a car, and it's for sale"
    this.color = data.color
    this.ownedByGrandma = data.ownedByGrandma

    // REVIEW date object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
    this.listingDate = data.listingDate ? new Date(data.listingDate) : new Date()
  }


  get HTMLTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
      <section class="row bg-light elevation-5 car-border" style="border-color: ${this.color};">
        <div class="col-12 col-md-4 p-0">
          <img class="img-fluid car-img"
            src="${this.img}"
            alt="${this.make} ${this.model}">
        </div>
        <div class="col-12 col-md-8 p-3">
          ${this.ComputeGrandmaBanner}
          <h2>${this.year} ${this.make} ${this.model}</h2>
          <h3>$${this.price}</h3>
          <h4>${this.miles} miles</h4>
          <p>${this.description}</p>
          <h5>${this.listingDate.toLocaleString()}</h5>
          <button onclick="app.CarsController.deleteCar('${this.id}')" class="btn btn-danger mt-2">Delete Car</button>
        </div>
      </section>
    </div>
    `
  }

  get ComputeGrandmaBanner() {

    if (this.ownedByGrandma) {
      return `
      <div class="text-bg-danger text-center p-1">
        <p class="mb-0">Grandma Car 👵</p>
      </div>
      `
    }

    return ''
  }
}