import { Outlet } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Layout() {
    return (
        <>
        <Header></Header>
            <Box textAlign="center" mt={10}>
                <Heading as="h1" size="xl">
                    Forkert URL. Prøv en anden side.
                </Heading>
            </Box>
            <main>                
                <Outlet />
            </main>
        </>
    );
}