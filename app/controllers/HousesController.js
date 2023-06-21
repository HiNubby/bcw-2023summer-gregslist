import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    let houseTemplate = ''
    AppState.houses.forEach(house => {
        houseTemplate += house.HTMLTemplate
    })
    setHTML('houseListings', houseTemplate)
}

export class HousesController {
    constructor() {
        console.log('House Controller Loaded')
        _drawHouses()
        AppState.on('houses', _drawHouses)
    }

    createHouse(event) {
        event.preventDefault()
        const form = event.target
        const houseData = getFormData(form)
        housesService.createHouse(houseData)
        form.reset()
    }

    async deleteHouse(houseId) {
        const wantsToDelete = await Pop.confirm('Do you want to delete this listing?')

        if (!wantsToDelete) {
            return
        }

        housesService.deleteHouse(houseId)
    }
}