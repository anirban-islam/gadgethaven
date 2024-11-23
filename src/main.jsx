import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import Error from "./Components/ErrorPage/Error.jsx";
import Home from "./Pages/Home/Home.jsx";
import Statistics from "./Pages/Statistics/Statistics.jsx";
import Dashbord from "./Pages/Dashbord/Dashbord.jsx";
import Rutrun from "./Pages/Return_Policy/Rutrun";
import ProductDetails from "./Components/ProductDetails/productDetails.jsx";
import Cartdata from "./Components/cartdata/cartdata.jsx";
import Wishdata from "./Components/Wishdata/Wishdata.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashbord",
        element: <Dashbord></Dashbord>,
      },
      {
        path: "/return",
        element: <Rutrun></Rutrun>,
      },
      {
        path: "product/:productid",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/Product_Data/Product.json"),
      },
      {
        path: "/dashbord/cart",
        element: <Cartdata></Cartdata>,
        loader: () => fetch("/Product_Data/Product.json"),
      },
      {
        path: "/dashbord/wishlist",
        element: <Wishdata></Wishdata>,
        loader: () => fetch("/Product_Data/Product.json"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
