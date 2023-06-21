import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { JobsController } from "./controllers/JobsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { WatchlistController } from "./controllers/WatchlistController.js";
import { AboutView } from "./views/AboutView.js";
import { CarView } from "./views/CarView.js";
import { HouseView } from "./views/HouseView.js";
import { JobView } from "./views/JobView.js";
import { WatchlistView } from "./views/WatchlistView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="p-4">
      <h1>Welcome to Gregslist!</h1>
      <h2>Please select a category from the navbar!</h2>  
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarView
  },
  {
    path: '#/houses',
    controller: [HousesController, WatchlistController],
    view: HouseView
  },
  {
    path: '#/jobs',
    controller: [JobsController, WatchlistController],
    view: JobView
  },
  {
    path: '#/watchlist',
    controller: WatchlistController,
    view: WatchlistView
  },
]