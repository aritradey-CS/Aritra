import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FloatingButton from "./pages/FloatingButton";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FloatingButton" element={<FloatingButton />} />
      </Routes>
    </Router>
  );
}

export default App;
