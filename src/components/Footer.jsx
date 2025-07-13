import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-black border-t-2 border-neon-gold' : 'bg-white border-t-2 border-neon-purple'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-4xl mb-4">🎰</div>
          
          <div className={`neon-text text-2xl font-bold mb-4 ${
            darkMode ? 'text-neon-pink' : 'text-neon-blue'
          }`}>
            NEON VOWS
          </div>
          
          <div className={`script-text text-lg mb-6 ${
            darkMode ? 'text-neon-gold' : 'text-neon-purple'
          }`}>
            Where wild love meets Vegas dreams! 💕
          </div>
          
          <div className={`text-sm mb-4 ${
            darkMode ? 'text-neon-cream' : 'text-gray-600'
          }`}>
            <p>Jack & Jill • December 25, 2024</p>
            <p>Little White Chapel, Las Vegas</p>
          </div>
          
          <div className={`text-xs ${
            darkMode ? 'text-neon-mint' : 'text-gray-500'
          }`}>
            <p>Neon Vows – A Vegas Wedding Template by Mrake Agency</p>
            <p className="mt-2">
              Built with React, Tailwind CSS, and lots of Vegas magic! ✨
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-8"
        >
          <div className={`text-2xl ${
            darkMode ? 'text-neon-gold' : 'text-neon-pink'
          }`}>
            🎲 💍 🎰 💕 🎭 ✨
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;