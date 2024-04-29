// App.tsx
import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/HomePage"
import Inventory from "./pages/InventoryPage"
import Build from "./pages/BuildPage"
import OrderConfirmation from "./pages/OrderConfirmation" // Import the component
import Layout from "./components/Layout"
import Page404 from "./pages/Page404"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />, // Handle errors with a 404 page
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/build",
          element: <Build />,
        },
        {
          path: "/order-confirmation", // New route for the order confirmation page
          element: <OrderConfirmation />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
