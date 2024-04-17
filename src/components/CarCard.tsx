import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button, Box, useDisclosure, FormControl, FormLabel, Select, Center, } from "@chakra-ui/react";
import { Car } from "../hooks/useCars";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from "react";
import React from "react";
import CarModal from "./CarModal";

interface Props {
  car: Car;
}

const CarCard = ({ car }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  //console.log(car);

  return (
    <Card >
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading fontSize="2xl">{car.name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <Image
        src={`/${car.type}${car.color}.jpg`}
        overflow="hidden"
        borderRadius="40"
        pt={car.type.includes('sportscar') ? '8' : undefined}
      ></Image>
      <CardBody>
        <Text color='blue.600' fontSize='2xl'>
          $50000
        </Text>
      </CardBody>

      <Center>
      <CardFooter>


        <Button mt={4} onClick={onOpen}>
          Køb denne bil!
        </Button>
        <CarModal car={car} isOpen={isOpen} onClose={onClose} finalRef={finalRef} />

      </CardFooter>
</Center>
      
    </Card>
  );
};

export default CarCard;



