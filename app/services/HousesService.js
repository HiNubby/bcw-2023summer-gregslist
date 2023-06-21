import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js"

function _saveHouses() {
    saveState('houses', AppState.houses)
}

class HousesService {
    createHouse(houseData) {
        AppState.houses = [...AppState.houses, new House(houseData)]
        _saveHouses()
    }

    deleteHouse(houseId) {
        AppState.houses = [...AppState.houses.filter(house => house.id != houseId)]
        _saveHouses()
    }
}

export const housesService = new HousesService()