import { AppState } from "../AppState.js"
import { watchlistService } from "../services/WatchlistService.js"
import { setHTML } from "../utils/Writer.js"

function _drawWatchlist() {
    if (document.getElementById('watchlistList')) {
        let watchlistTemplate = ''
        AppState.watchlist.forEach(listing => {
            watchlistTemplate += listing.HTMLTemplate
        })
        setHTML('watchlistList', watchlistTemplate)
    }
}

export class WatchlistController {
    constructor() {
        console.log('watchlist controller loaded')
        _drawWatchlist()
    }

    addToWatchlist(listingId) {
        watchlistService.addToWatchlist(listingId)
    }
}