import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBreeds } from "../hooks/use-breeds";

export function BreedList() {
  const breeds = useBreeds();

  const [search, setSearch] = useState("");
  const filterBreeds = search
    ? breeds.filter((b) => b.indexOf(search) == 0)
    : breeds;

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Filter Breeds"
            variant="outlined"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Grid>
        {filterBreeds.map((b) => (
          <Grid key={b} item xs={3}>
            <Button variant="contained" component={Link} to={`/breed/${b}`}>
              {b}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
