import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import './styles.css'; //Imported as the global styles
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
