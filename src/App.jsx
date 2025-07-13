import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import ThankYou from './components/ThankYou';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-neon-black via-purple-900 to-neon-black' 
          : 'bg-gradient-to-br from-neon-cream via-yellow-100 to-neon-cream'
      }`}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero darkMode={darkMode} />
              <OurStory darkMode={darkMode} />
              <WeddingInfo darkMode={darkMode} />
              <Countdown darkMode={darkMode} />
              <Gallery darkMode={darkMode} />
              <RSVP darkMode={darkMode} setShowConfetti={setShowConfetti} />
              <Guestbook darkMode={darkMode} />
              <Registry darkMode={darkMode} />
            </>
          } />
          <Route path="/admin" element={<AdminPanel darkMode={darkMode} />} />
          <Route path="/thank-you" element={<ThankYou darkMode={darkMode} />} />
        </Routes>
        
        <Footer darkMode={darkMode} />
        
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            <div className="w-full h-full relative overflow-hidden">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-neon-pink rounded-full"
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: -10,
                    rotate: 0 
                  }}
                  animate={{ 
                    y: window.innerHeight + 10,
                    rotate: 360 
                  }}
                  transition={{ 
                    duration: 3,
                    delay: Math.random() * 2,
                    repeat: Infinity 
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;