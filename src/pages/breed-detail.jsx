import { Box, Button, Grid, ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBreedsImages } from "../hooks/use-breeds-images";

export function BreedDetail() {
  let { breed } = useParams();
  
  const images = useBreedsImages(breed);

  const [subBreeds, setSubBreeds] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/list`)
      .then((response) => {
        setSubBreeds(response.data.message);
      });
  }, []);
  return (
    <Box sx={{ p: 2 }}>
      <h1>Breed: {breed}</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ImageList sx={{ width: "100%" }} cols={1}>
            {images.map((img) => (
              <ImageListItem key={img}>
                <img src={img} alt={img} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={6}>
          {subBreeds.map(sb => <Button variant="contained" component={Link} to={`/sub-breed/${breed}/${sb}`}>{sb}</Button>)}

        </Grid>
      </Grid>
    </Box>
  );
}
