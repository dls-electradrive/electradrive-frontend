import { useState } from 'react';
import { FormControl, FormLabel, Heading, Input, Select, Button, useToast, Center } from "@chakra-ui/react";
import styles from '../my-style.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
const salesUrl = import.meta.env.VITE_BACKEND_SALE_URL
const apiKey = import.meta.env.VITE_API_KEY;

interface BuildFormProps {
  car: string;
  color: string;
  setCar: (car: string) => void;
  setColor: (color: string) => void;
}

const BuildForm: React.FC<BuildFormProps> = ({ car, color, setCar, setColor }) => {
  const [battery, setBattery] = useState("smallbattery");
  const [hitch, setHitch] = useState("false");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate(); 


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ car, color, battery, hitch, name, email, address });

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
  
    const customerUUID = uuidv4();
    const carUUID = uuidv4();

    const payload = {
        customerId: customerUUID, // Assign UUID to the customer
        customerName: name,
        customerEmail: email,
        customerAddress: address,
        carId: carUUID, // Assign UUID to the car
        carType: car,
        carColor: color,
        carBattery: battery,
        carHitch: hitch,
    };
    console.log(payload);

    try {
      console.log("Tries to send to backend via buildform");
      const response = await fetch(salesUrl, {
        method: "POST",
        headers: {
          'Authorization': apiKey,
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
      console.error("Failed to send to backend via buildform");
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
          </Heading>
          <Heading as="h1" size="md" mb={4} textAlign="center" className={styles.slightpadding}>
            ____________
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
          <option value="false">No</option>
          <option value="true">Yes</option>
        </Select>
        <Heading className={styles.slightpaddingtop} as="h1" size="md" mb={4} textAlign="center">
          Delivery and payment info.
          </Heading>
          <Heading as="h1" size="md" mb={4} textAlign="center">
            ____________
          
        </Heading>
        <FormLabel textAlign="center">Full name</FormLabel>
        <Input type='name' onChange={e => setName(e.target.value)} isRequired />
        <FormLabel textAlign="center">Email address</FormLabel>
        <Input type='email' onChange={e => setEmail(e.target.value)} isRequired />
        <FormLabel textAlign="center">Delivery address</FormLabel>
        <Input type='address' onChange={e => setAddress(e.target.value)} isRequired />
        <Center>
        <Button type="submit" isLoading={isLoading}>Submit</Button>
        </Center>
      </FormControl>
      
    </form>
  );
};

export default BuildForm;