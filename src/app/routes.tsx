import { createBrowserRouter } from "react-router";
import { MenuListing } from "./pages/MenuListing";
import { FoodDetail } from "./pages/FoodDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MenuListing,
  },
  {
    path: "/food/:id",
    Component: FoodDetail,
  },
]);
