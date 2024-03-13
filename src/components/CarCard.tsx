import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button, Box, useDisclosure } from "@chakra-ui/react";
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
import InventoryModal from './InventoryModal';
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

            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </CardFooter>
    </Card>
  );
};

export default CarCard;



