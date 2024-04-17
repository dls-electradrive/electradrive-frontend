import { Button, Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Center, FormControl, FormLabel, Select, Input } from '@chakra-ui/react';
import { Car } from "../hooks/useCars";
import React from "react";
import styles from '../my-style.module.css';
import InventoryForm from './InventoryForm';

interface Props {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
  finalRef: React.RefObject<any>;
}

const CarModal = ({ car, isOpen, onClose, finalRef }: Props) => {
  //console.log(car);
  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className={styles.center}>Purchase car</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={`/${car.type}${car.color}.jpg`}
            overflow="hidden"
            borderRadius="40"
            paddingBottom={50}
          ></Image>
          <Heading className={styles.center} fontSize="2xl">{car.name}</Heading>
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
          <InventoryForm car={car}/>


        </ModalBody>
        <Center>
        <ModalFooter>
        </ModalFooter>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default CarModal;