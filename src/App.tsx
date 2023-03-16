import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWilder from "./pages/AddWilder";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { WildersProvider } from "./contexts/WildersContext";

function App() {
  return (
    <div>
      <Navbar />
      <WildersProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<AddWilder />} />
        </Routes>
      </WildersProvider>

      <Footer />
    </div>
  );
}

export default App;
