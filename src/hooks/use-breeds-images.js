import axios from "axios";
import { useEffect, useState } from "react";

export function useBreedsImages(breed) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
      .then((response) => {
        setImages(response.data.message);
      });
  }, [breed]);
  return images;
}
