import { Outlet } from "react-router-dom"
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Layout() {
    return (
        <>
            <Box py={8}>
                <Container maxW="container.lg">
                    <Heading as="h1" size="xl" mb={4}>
                        Welcome to our Build Page
                    </Heading>
                    <Text fontSize="xl" mb={8}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        tincidunt, nunc id aliquam lacinia, nisl justo tincidunt nunc, id
                        consectetur nunc nunc id aliquam lacinia, nisl justo tincidunt
                        nunc, id consectetur nunc
                    </Text>
                    <Outlet />
                </Container>
            </Box>
            
        </>
    );
}