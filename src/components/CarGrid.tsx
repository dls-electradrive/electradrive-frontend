import { SimpleGrid, Text } from "@chakra-ui/react";
import useCars from "../hooks/useCars";
import CarCard from "./CarCard";
import CarCardSkeleton from "./CarCardSkeleton";

const CarGrid = () => {
  const { error, cars, isLoading } = useCars();
  const skeletons = [...Array(20).keys()];

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CarCardSkeleton key={skeleton} />
          ))}
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default CarGrid;