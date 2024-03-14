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
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("/mycars.json");
        const data = await response.json();
        setCars(data);
      };

      fetchData();
    } catch (error) {
      setError("Error fetching data");
    }
  }, []);

  return { cars, error };
};

export default useCars;
