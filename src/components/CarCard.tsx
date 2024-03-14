import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button, Box, useDisclosure, FormControl, FormLabel, Select, } from "@chakra-ui/react";
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

interface Props {
  car: Car;
}

const CarCard = ({ car }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)



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
        src={`/${car.background_image}.jpg`}
        overflow="hidden"
        borderRadius="40"
      ></Image>
      <CardBody>
        <Text color='blue.600' fontSize='2xl'>
          $450
        </Text>
      </CardBody>
      <CardFooter>


        <Button mt={4} onClick={onOpen}>
          Køb denne bil!
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Purchase car</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={`/${car.background_image}.jpg`}
                overflow="hidden"
                borderRadius="40"
              ></Image>
              <Heading fontSize="2xl">{car.name}</Heading>
              <Text>
                This {car.type} is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text>
                It comes in a beautiful {car.color} color, and is powered by a {car.battery} Kw battery.
              </Text>
              <Text>
                This model {car.hitch ? 'comes with' : 'does not come with'} a trailer hitch.
              </Text>

              <FormControl color={"black"}>
                <Heading as="h1" size="md" mb={4} textAlign="center">
                  Design your Car.

                  <Heading as="h1" size="md" mb={4} textAlign="center">

                    ____________
                  </Heading>
                </Heading>
                <FormLabel textAlign="center">Select car type</FormLabel>
                <Select title="Car" >
                  <option value="suv">Suv</option>
                  <option value="sportscar">Sportscar</option>
                </Select>
                <FormLabel textAlign="center">Select color</FormLabel>
                <Select title="Color">
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                </Select>
                <FormLabel textAlign="center">Select battery size</FormLabel>
                <Select title="Battery" name="batteryoutput">
                  <option value="smallbattery">50kW</option>
                  <option value="largeattery">70kW</option>
                </Select>
                <FormLabel textAlign="center">Trailer hitch</FormLabel>
                <Select title="Hitch">
                  <option value="wheel19">No</option>
                  <option value="wheel21">Yes</option>
                </Select>
              </FormControl>

            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3}  onClick={() => console.log()}>
                Buy
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </CardFooter>
    </Card>
  );
};

export default CarCard;



