import { useState } from 'react';
import { FormControl, FormLabel, Heading, Input, Select, Button, useToast } from "@chakra-ui/react";
import styles from '../my-style.module.css';

const BuildForm = () => {
  const [car, setCar] = useState("");
  const [color, setColor] = useState("");
  const [battery, setBattery] = useState("");
  const [hitch, setHitch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!car || !color || !battery || !hitch || !name || !email || !address) {
      toast({
        title: "Error.",
        description: "Please fill out all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, address, car, color, battery, hitch }),
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
        <Heading as="h1" size="md" mb={4} textAlign="center">
          Design your Car.
          <Heading as="h1" size="md" mb={4} textAlign="center" className={styles.slightpadding}>
            ____________
          </Heading>
        </Heading>
        <FormLabel textAlign="center">Select car type</FormLabel>
        <Select title="Car" onChange={e => setCar(e.target.value)} value={car}>
          <option value="suv">Suv</option>
          <option value="sportscar">Sportscar</option>
        </Select>
        <FormLabel textAlign="center">Select color</FormLabel>
        <Select title="Color" onChange={e => setColor(e.target.value)} value={color}>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </Select>
        <FormLabel textAlign="center">Select battery size</FormLabel>
        <Select title="Battery" onChange={e => setBattery(e.target.value)}>
          <option value="smallbattery">50kW</option>
          <option value="largebattery">70kW</option>
        </Select>
        <FormLabel textAlign="center">Trailer hitch</FormLabel>
        <Select title="Hitch" onChange={e => setHitch(e.target.value)}>
          <option value="wheel19">No</option>
          <option value="wheel21">Yes</option>
        </Select>
        <Heading className={styles.slightpaddingtop} as="h1" size="md" mb={4} textAlign="center">
          Delivery and payment info.
          <Heading as="h1" size="md" mb={4} textAlign="center">
            ____________
          </Heading>
        </Heading>
        <FormLabel textAlign="center">Full name</FormLabel>
        <Input type='name' onChange={e => setName(e.target.value)} />
        <FormLabel textAlign="center">Email address</FormLabel>
        <Input type='email' onChange={e => setEmail(e.target.value)} />
        <FormLabel textAlign="center">Delivery address</FormLabel>
        <Input type='address' onChange={e => setAddress(e.target.value)} />
      </FormControl>
      <Button type="submit" isLoading={isLoading}>Submit</Button>
    </form>
  );
};

export default BuildForm;