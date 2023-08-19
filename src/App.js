import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog'; // Import your Blog component
import { BlogCardList } from './pages/Blog'; //Correct import path
import FloatingButton from './pages/FloatingButton';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<BlogCardList />} /> {/* Correct usage */}
        
        <Route path="/FloatingButton" element={<FloatingButton />} />
      </Routes>
    </Router>
  );
}

export default App;
