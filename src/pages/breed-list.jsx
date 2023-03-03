import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
export function BreedList() {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      setBreeds(Object.keys(response.data.message));
    });
  }, []);

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
            <Button variant="contained">{b}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
