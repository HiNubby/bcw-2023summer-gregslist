import { AppState } from "../AppState.js"

class WatchlistService {
    addToWatchlist(listingId) {
        const combinedArray = [...AppState.cars, ...AppState.houses, ...AppState.jobs]
        AppState.watchlist = [...AppState.watchlist, combinedArray.find(listing => listing.id == listingId)]
    }
}

export const watchlistService = new WatchlistService()