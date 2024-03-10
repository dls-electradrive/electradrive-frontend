import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Car } from "../hooks/useCars";

interface Props {
  car: Car;
}

const CarCard = ({ car }: Props) => {
  return (
    <Card>
      <Image
        src={`/${car.background_image}.jpg`}
        overflow="hidden"
        borderRadius="10"
      ></Image>
      <CardBody>
        <Heading fontSize="2x1">{car.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CarCard;