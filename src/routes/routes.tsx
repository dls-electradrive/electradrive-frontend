import PathConstants from "./PathConstants"
import Home from "../pages/HomePage"
import Inventory from "../pages/InventoryPage"
import Build from "../pages/BuildPage"

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.INVENTORY, element: <Inventory /> },
    { path: PathConstants.BUILD, element: <Build/> },
]
export default routes