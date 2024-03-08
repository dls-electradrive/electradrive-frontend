import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Flex, Heading, Image, FormControl, FormLabel, FormErrorMessage, FormHelperText, Select, AbsoluteCenter } from "@chakra-ui/react";
import { Center, Square, Circle } from '@chakra-ui/react'


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
            <Box py={8} bg="white" >
                    <Flex>
                        <Box flex="3">
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
                        <Box flex="1" bg={"teal.500"} marginRight={"50"}>
                            <FormControl textColor={"black"} color={"black"}>
                                <center>
                                    <h2 content="center"> Design your desired car!</h2>
                                </center>
                                <FormLabel>Select car type</FormLabel>
                                <Select title="Car" onChange={handleCarChange} value={car}>
                                    <option value="suv">Suv</option>
                                    <option value="sportscar">Sportscar</option>
                                </Select>
                                <FormLabel>Select color</FormLabel>
                                <Select title="Color" onChange={handleColorChange} value={color}>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                </Select>
                            </FormControl>

                        </Box>
                </Flex>
                
                <Outlet />

            </Box>
        </>
    );
}