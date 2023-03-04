import axios from "axios";
import { useEffect, useState } from "react";

export function useBreeds() {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      setBreeds(Object.keys(response.data.message));
    });
  }, []);
  return breeds;

}
