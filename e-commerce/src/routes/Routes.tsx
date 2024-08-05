import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Products from "../components/products/Products";
import ProductInfo from "../components/products/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/product",
        element: <ProductInfo />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
