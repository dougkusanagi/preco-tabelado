import { Route, Routes } from "react-router-dom";
import PriceTable from './pages/PriceTable';
import Navbar from "./Navbar";
import Home from "./pages/Home";

export const theme = {
  backgroundImage: "./img/bg.jpg",
  logoImage: "./img/logo.png",
};

export default function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price-table" element={<PriceTable {...theme} />} />
      </Routes>
    </div>
  );
}
