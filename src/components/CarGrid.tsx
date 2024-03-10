import { SimpleGrid, Text } from "@chakra-ui/react";
import useCars from "../hooks/useCars";
import CarCard from "./CarCard";
const CarGrid = () => {
  const { error, cars } = useCars();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10"
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default CarGrid;