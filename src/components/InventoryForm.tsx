import { Button, Center, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from '../my-style.module.css';
import { Car } from "../hooks/useCars"; // adjust the path as necessary

interface Props {
  car: Car;
}
const DeliveryForm = ({ car }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/delivery', { // adjust the URL as necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, address, carId: car.id  }),
      });

      const data = await response.json();
      console.log(data);

      toast({
        title: "Success.",
        description: "Your information has been submitted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
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
          <Heading as="h1" size="md" mb={4} textAlign="center" >
            ____________
          </Heading>
          </Heading>
      <FormLabel textAlign="center">Full name</FormLabel>
      <Input type='text' value={name} onChange={(e) => setName(e.target.value)} isRequired />
      <FormLabel textAlign="center">Email address</FormLabel>
      <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} isRequired />
      <FormLabel textAlign="center">Delivery address</FormLabel>
      <Input type='text' value={address} onChange={(e) => setAddress(e.target.value)} isRequired />
      <Center>
      <Button type="submit" isLoading={isLoading}>Submit</Button>
      </Center>
    </FormControl>
    </form>
  );
};

export default DeliveryForm;