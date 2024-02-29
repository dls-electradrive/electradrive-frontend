import { Grid, GridItem, Show } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import CustomCarPage from "./Pages/CustomCarPage/CustomCarPage";
import HomePage from "./Pages/HomePage/HomePage";
import LagerPage from "./Pages/LagerPage/LagerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route index element={<HomePage />} />
        <Route path="lager" element={<LagerPage />} />
        <Route path="customcar" element={<CustomCarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;