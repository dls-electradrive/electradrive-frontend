import { useState, useEffect } from "react";

export interface Car {
  id: number;
  name: string;
  type: string;
  color: string;
  battery: string;
  hitch: boolean;
  background_image: string;
}

const useCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/mycars.json");
        const data = await response.json();
        setCars(data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setIsLoading(false);
      }
    };

  {/* Brug hvis skeletons skal observeres!
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
    }; */}
    

    fetchData();
  }, []);

  return { cars, isLoading, error };
};

export default useCars;
