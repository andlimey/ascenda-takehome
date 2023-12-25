import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelListContainer from "./components/HotelListContainer";
import HotelPage from "./components/HotelPage";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HotelListContainer />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
