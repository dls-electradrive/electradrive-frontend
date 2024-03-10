import { Outlet } from "react-router-dom";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import CarGrid from "../components/CarGrid";

export default function Layout() {
    return (
        <>
            <Box py={8} textAlign="center">
                <Container maxW="container.lg">
                    <Heading as="h1" size="xl" mb={4}>
                        Inventory Page
                    </Heading>
                    <Text fontSize="xl" mb={8}>
                        Here you can browse all the cars we have in stock. Since these are in our warehouse, you can have them delivered to you immediately. If you wish to construct your own car, please visit the Build page.
                    </Text>
                    <Outlet />
                </Container>
                <CarGrid></CarGrid>
            </Box>
        </>
    );
}