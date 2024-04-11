import { Box, Container, GridItem, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import styles from '../my-style.module.css';
import PathConstants from '../routes/PathConstants';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

export default function Layout() {
    return (
        <>

            <Box py={80} textAlign="center" backgroundImage={"/rdtest3.jpg"} className={styles.imagecontainer}>
                <Heading as="h1" size="4xl" mb={4} className={styles.centertitlandextra} color="white">
                    ElectraDrive
                </Heading>
                <Container maxW="container.lg">

                    <Text fontSize="xl" mb={8} color="black">
                        A greener road. A brighter future.
                    </Text>

                    <Outlet />
                </Container>
            </Box>
            <Text fontSize="xl" mb={8} color="black" paddingTop={50} textAlign={"center"}>
                        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </Text>

            <Box py={32} textAlign="center">
                <Container maxWidth="1500px">

                    <SimpleGrid columns={2} spacing={200}>
                        <GridItem w='100%' h='100%' >
                            <Box w="100%">
                                <Image src='/carovallogo.png'>
                                </Image>

                            </Box>
                        </GridItem>


                        <GridItem w='100%' h='100%' >
                            <Box w="100%">
                                <Heading as="h1" size="xl" mb={4} color="black">
                                    Individualistic design
                                </Heading>
                                <Text fontSize="xl" mb={8} color="black">
                                    "Empower your journey with ElectraDrive, where innovation meets customization. Experience the thrill of crafting your own electric masterpiece, tailored to your unique style and preferences. From sleek sedans to rugged SUVs, our intuitive platform puts the power in your hands, allowing you to design a ride that reflects your personality and values. With cutting-edge technology and sustainable engineering, every vehicle you build not only drives your dreams forward but also paves the way for a greener tomorrow. Embrace the future of mobility with ElectraDrive, where the road to excellence begins with your imagination."
                                </Text>
                                <ChakraLink as={RouterLink} to='/build'>
                                    <Button colorScheme='messenger' variant='solid'>
                                    Click here to design your own car!
                                </Button>
                                </ChakraLink>
                                


                            </Box>
                        </GridItem>


                        <GridItem w='100%' h='100%'>
                            <Box w="100%">
                            <Heading as="h1" size="xl" mb={4} color="black">
                                    Already in stock.
                                </Heading>
                                <Text fontSize="xl" mb={8} color="black">
                                "Discover automotive excellence at your fingertips with ElectraDrive's ready-to-drive inventory! Our meticulously crafted, high-performance electric cars are now in stock, each one a testament to precision engineering and sustainable innovation. From the sporty elegance of our sedans to the robust versatility of our SUVs, your dream car awaits with specific details that cater to your desires.
                                </Text>
                                <ChakraLink as={RouterLink} to='/build'>
                                    <Button colorScheme='messenger' variant='solid'>
                                    Click here to buy an already manufactored car!
                                </Button>
                                </ChakraLink>
                            </Box>
                        </GridItem>


                        <GridItem w='100%' h='100%'>
                            <Box w="100%">
                            <Image src='/suvred.jpg'>
                                </Image>
                            </Box>
                        </GridItem>


                    </SimpleGrid>

                    <Outlet />
                </Container>
            </Box>


        </>
    );
}