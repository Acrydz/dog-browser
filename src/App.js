import "./App.css";
import { BreedList } from "./pages/breed-list";
import { BreedDetail } from "./pages/breed-detail";
import { SubBreedDetail } from "./pages/sub-breed-detail";
import { Routes, Route } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dogs
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<BreedList />} />
        <Route path="breed/:breed" element={<BreedDetail />} />
        <Route path="sub-breed/:breed/:subBreed" element={<SubBreedDetail />} />
      </Routes>
    </>
  );
}

export default App;
