import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Flex, Heading, Image, FormControl, FormLabel, FormErrorMessage, FormHelperText, Select, AbsoluteCenter, Button, Input } from "@chakra-ui/react";
import { Center, Square, Circle } from '@chakra-ui/react'
import styles from '../my-style.module.css';
import BuildForm from "../components/BuildForm";

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
                            <Image paddingTop={59}
                                src={getImageSrc()}
                                alt="Car Image"
                                objectFit="cover"
                                h="70%"
                                w="70%"
                            />
                        </Center>
                    </Box>
                    <Box flex="1" bg={"red.400"} marginRight={"50"}>
                        <Box flex="1" bg={"red.400"} marginRight={"50"}>

                            <BuildForm car={car} color={color} setCar={setCar} setColor={setColor} />
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