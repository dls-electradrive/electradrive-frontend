import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Outlet, Link } from "react-router-dom";
import "../Pages/HomePage/HomePage.tsx";
import "../Pages/CustomCarPage/CustomCarPage.tsx";
import "../Pages/LagerPage/LagerPage.tsx";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Link to="/">Home</Link>
        <Link to="lager">Lager</Link>
        <Link to="customcar">Custom Car</Link>
      </HStack>
      <Outlet />
    </>
  );
};

export default NavBar;
