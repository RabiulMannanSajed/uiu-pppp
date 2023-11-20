import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/layout/Main";
import Home from "../Page/Home/Home/Home";
import Restaurents from "../Page/Home/Restaurents/Restaurents/Restaurents";
import RestaurantsItemsOfRest from "../Page/RestaurantItem/RestaurantsItems/RestaurantsItemsOfRest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/restaurants",
        element: <Restaurents></Restaurents>,
      },
      {
        path: "/restaurantItem/:id",
        element: <RestaurantsItemsOfRest></RestaurantsItemsOfRest>,
        loader: () => fetch("./menu.json"),
      },
    ],
  },
]);
