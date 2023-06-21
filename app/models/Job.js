import { generateId } from "../utils/generateId.js"

export class Job {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.position = data.position
        this.payRate = data.payRate
        this.company = data.company
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.listingDate = data.listingDate ? new Date(data.listingDate) : new Date()
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
            <h2>${this.name}</h2>
            <h2>${this.position} | Pay Rate: $${this.payRate}/hr</h2>
            <h3>${this.company}</h2>
            <p>${this.description}</p>
            <h5>${this.listingDate.toLocaleString()}</h5>
            <button onclick="app.JobsController.deleteJob('${this.id}')" class="btn btn-danger mt-2">Delete Listing</button>
          </div>
        </section>
      </div>
        `
    }
}