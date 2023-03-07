import { Grid, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useSubBreedsImages } from "../hooks/use-sub-breeds-images";

export function SubBreedDetail() {
  let { breed } = useParams();
  let { subBreed } = useParams();

  const images = useSubBreedsImages(breed, subBreed);
  return (
    <Box sx={{ p: 2 }}>
      <h1>Breed: {breed} SubBreed: {subBreed}</h1>
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
        
      </Grid>
    </Box>
  );
}
