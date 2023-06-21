import { generateId } from "../utils/generateId.js"

export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.listingDate = data.listingDate ? new Date(data.listingDate) : new Date()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get HTMLTemplate() {
        return `
        <div class="col-10 m-auto mb-3">
        <section class="row bg-light elevation-5">
          <div class="col-12 col-md-4 p-0">
            <img class="img-fluid listing-img"
              src="${this.imgUrl}"
              alt="${this.name}">
          </div>
          <div class="col-12 col-md-8 p-3">
            <h2>${this.year} ${this.name}</h2>
            <h2>$${this.price}</h2>
            <h3>${this.bedrooms} Bedroom ${this.bathrooms} Bathrooms</h2>
            <h4>${this.sqft} Square Footage</h4>
            <p>${this.description}</p>
            <h5>${this.listingDate.toLocaleString()}</h5>
            <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger mt-2">Delete Listing</button>
          </div>
        </section>
      </div>
        `
    }
}