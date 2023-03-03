import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
export function BreedList() {
  return (
   <Box sx={{ p: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField id="outlined-basic" label="Filter Breeds" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained">xs=4</Button>
      </Grid>
    </Grid>
   </Box> 
  );
}
