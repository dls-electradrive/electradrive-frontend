import { Button, Center, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from '../my-style.module.css';
import { Car } from "../hooks/useCars"; // adjust the path as necessary
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
const salesUrl = import.meta.env.VITE_BACKEND_SALE_URL

interface Props {
  car: Car;
}

const InventoryForm = ({ car }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate(); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !address) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    const customerUUID = uuidv4();
    

    const payload = {
      customerId: customerUUID, // Assign UUID to the customer
      customerName: name,
      customerEmail: email,
      customerAddress: address,
      carId: car.id, // Assign UUID to the car
      carType: car.type,
      carColor: car.color,
      carBattery: car.battery,
      carHitch: car.hitch,
  };

    console.log(payload);
    
    try {
      console.log("Tries to send to backend via inventoryform");
      const response = await fetch(salesUrl, { // Adjust the URL as necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });


      if (response.ok) {
        // If the HTTP status code is 2xx, it was successful
        // Redirection after a successful order
        navigate('/order-confirmation', { state: { orderDetails: payload } });

      } else {
        // If the HTTP status code is not 2xx, throw an error
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error("Failed to send to backend via inventoryform");
      console.error(error);
      toast({
        title: "An error occurred.",
        description: "Unable to submit your information.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl color={"black"}>
        <Heading as="h2" size="x2" mb={4} textAlign="center">
          -----------------------------------------------------------------
        </Heading>
        <Heading className={styles.slightpaddingtop} as="h1" size="md" mb={4} textAlign="center" >
          Delivery and payment info.
          </Heading>
          <Heading as="h1" size="md" mb={4} textAlign="center" >
            ____________
          </Heading>
          
      <FormLabel textAlign="center">Full name</FormLabel>
      <Input type='name' value={name} onChange={(e) => setName(e.target.value)} isRequired />
      <FormLabel textAlign="center">Email address</FormLabel>
      <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} isRequired />
      <FormLabel textAlign="center">Delivery address</FormLabel>
      <Input type='address' value={address} onChange={(e) => setAddress(e.target.value)} isRequired />
      <Center>
      <Button type="submit" isLoading={isLoading}>Submit</Button>
      </Center>
    </FormControl>
    </form>
  );
};

export default InventoryForm;