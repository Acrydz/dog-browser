import './App.css';
import { BreedList } from './pages/breed-list';
import { BreedDetail } from './pages/breed-detail';
import { SubBreedDetail } from './pages/sub-breed-detail';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<BreedList />} />
      <Route path="breed" element={<BreedDetail />} />
      <Route path="sub-breed" element={<SubBreedDetail />} />
    </Routes>
  </>
  );
}

export default App;
