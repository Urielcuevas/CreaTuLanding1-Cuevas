import './app.css'; 
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [filteredCategory, setFilteredCategory] = useState("all");

  return (
    <Router>
      <Navbar setFilteredCategory={setFilteredCategory} />
      <Routes>
        <Route path="/" element={<Products filteredCategory={filteredCategory} />} />
        <Route path="/carrito" element={<h2>Carrito de Compras</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
