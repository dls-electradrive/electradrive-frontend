import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/HomePage"
import Inventory from "./pages/InventoryPage"
import Layout from "./components/Layout"
import Build from "./pages/BuildPage"
import Page404 from "./pages/Page404"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />, //OBS error siden har sin header kaldt direkte i pages/Page404. Da vi ikke bruger layout til at loade siden.
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/build",
          element: <Build />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;