import { useState, useEffect } from "react";

export interface Car {
  id: number;
  name: string;
  type: string;
  color: string;
  battery: string;
  hitch: boolean;
}

const useCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.error("Trying to fetch data from backend via useCars.ts");
        setIsLoading(true);


        const response = await fetch("https://electradrive-backend.azurewebsites.net/api/cars/", {
          method: "GET",
          headers: {
            'Authorization': "PgI0SiQTB0F2RwTJkyVAOLVzUkSE95007OxtQSSaD0I",
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCars(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data from backend via useCars.ts", error);
        setError("Error fetching data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cars, isLoading, error };
};

export default useCars;



  
    /* Brug hvis skeletons skal observeres!
    useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/mycars.json");
        const data = await response.json();

        setTimeout(() => {
          setCars(data);
          setIsLoading(false);
        }, 5000); // delay of 5 seconds
      } catch (error) {
        setError("Error fetching data");
        setIsLoading(false);
      }
    }; */

