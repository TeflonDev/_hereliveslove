import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import Dreams from './pages/Dreams';
import About from './pages/About';
import Friends from './pages/Friends';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dreams" element={<Dreams />} />
          <Route path="/about" element={<About />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;