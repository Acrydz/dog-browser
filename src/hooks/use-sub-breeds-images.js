import { useEffect, useState } from "react";
import axios from "axios";

export function useSubBreedsImages(breed, subBreed) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/3`)
    .then((response) => {
      setImages(response.data.message);
    });
  },[breed, subBreed]);
    return images;  
  }
  