import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWilder from "./pages/AddWilder";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AddWilder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
