import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Flex, Heading, Image, FormControl, FormLabel, FormErrorMessage, FormHelperText, Select, AbsoluteCenter, Button } from "@chakra-ui/react";
import { Center, Square, Circle } from '@chakra-ui/react'
import styles from './my-style.module.css';

export default function Layout() {
    const [car, setCar] = useState("suv");
    const [color, setColor] = useState("white");

    const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCar(event.target.value);
        if (event.target.value === "sportscar") {
            setColor("white");
        }
    };

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(event.target.value);
    };

    const getImageSrc = () => {
        if (car === "suv") {
            return `/${car}${color}.jpg`;
        } else if (car === "sportscar") {
            return `/${car}${color}.jpg`;
        } else {
            return "/suvwhite.jpg"; // Default image
        }
    };

    return (
        <>
            <Box py={8} >
                <Heading as="h1" size="xl" mb={4} textAlign="center">
                    Design your Car.
                    </Heading>
                    <Heading as="h2" size="x2" mb={4} textAlign="center" >
                    Here you can design your own car and have it delivered after it has been manufactored.
                    </Heading>
                    <Heading as="h2" size="x2" mb={4} textAlign="center" paddingBottom={50}>
                    ----------------------------------------------------------------------------------------------------------------------------
                    </Heading>
                    <Flex>
                        <Box flex="3" paddingTop={59}>
                            <Center>
                                <Image
                                    src={getImageSrc()}
                                    alt="Car Image"
                                    objectFit="cover"
                                    h="70%"
                                    w="70%"
                                />
                            </Center>
                        </Box>
                        <Box  flex="1" bg={"red.400"} marginRight={"50"}>
                            <FormControl color={"white"}>
                            <Heading as="h1" size="md" mb={4} textAlign="center">
                                 Design your Car.
                                
                                 <Heading as="h1" size="md" mb={4} textAlign="center" className={styles.slightpadding}>
                                
                                 ____________
                            </Heading>
                            </Heading>
                                <FormLabel textAlign="center">Select car type</FormLabel>
                                <Select title="Car" onChange={handleCarChange} value={car}>
                                    <option value="suv">Suv</option>
                                    <option value="sportscar">Sportscar</option>
                                </Select>
                                <FormLabel textAlign="center">Select color</FormLabel>
                                <Select title="Color" onChange={handleColorChange} value={color}>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                </Select>
                                <FormLabel textAlign="center">Select battery size</FormLabel>
                                <Select title="Battery">
                                    <option value="smallbattery">50kW</option>
                                    <option value="largeattery">70kW</option>
                                </Select>
                                <FormLabel textAlign="center">Select wheel size</FormLabel>
                                <Select title="Wheel">
                                    <option value="wheel19">19"</option>
                                    <option value="wheel21">21"</option>
                                </Select>
                            </FormControl>
                            <Box textAlign="center" className={styles.slightpaddingtop}>
                                <Button colorScheme='pink' variant='solid' >
                                    Click here to purchase!
                                </Button>
    	                        </Box>
                        </Box>
                    
                </Flex>
                
                
                <Outlet />
                <Box textAlign="center" paddingTop={100}>
                            
                </Box>
            </Box>
        </>
    );
}