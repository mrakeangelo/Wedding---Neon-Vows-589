import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ darkMode }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-black via-purple-900 to-black' : 'bg-gradient-to-br from-neon-cream via-yellow-100 to-pink-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-neon-pink' : 'bg-neon-blue'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className={`neon-text text-6xl md:text-8xl font-black mb-4 ${
              darkMode ? 'text-neon-pink' : 'text-neon-blue'
            }`}
            animate={{ 
              textShadow: [
                '0 0 20px currentColor',
                '0 0 30px currentColor, 0 0 40px currentColor',
                '0 0 20px currentColor'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            JACK & JILL
          </motion.h1>
          
          <motion.div
            className={`script-text text-4xl md:text-6xl mb-6 ${
              darkMode ? 'text-neon-gold' : 'text-neon-purple'
            }`}
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            💕 are getting hitched! 💕
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className={`casino-card p-8 mx-auto max-w-md ${
            darkMode ? 'bg-black/80' : 'bg-white/80'
          }`}>
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-2">🎰</span>
              <span className={`neon-text text-2xl ${
                darkMode ? 'text-neon-mint' : 'text-neon-blue'
              }`}>
                VEGAS WEDDING
              </span>
              <span className="text-4xl ml-2">🎰</span>
            </div>
            
            <div className={`text-xl font-bold ${
              darkMode ? 'text-neon-gold' : 'text-neon-purple'
            }`}>
              December 25, 2024
            </div>
            
            <div className={`text-lg mt-2 ${
              darkMode ? 'text-neon-pink' : 'text-neon-blue'
            }`}>
              Little White Chapel • 6:00 PM
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="retro-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
          >
            🎲 RSVP NOW 🎲
          </motion.button>
          
          <motion.button
            className={`retro-button ${
              darkMode 
                ? 'bg-gradient-to-r from-neon-gold to-neon-mint' 
                : 'bg-gradient-to-r from-neon-purple to-neon-blue'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
          >
            💫 OUR STORY 💫
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={`text-sm ${darkMode ? 'text-neon-mint' : 'text-neon-purple'}`}>
            Scroll down for the wild ride! ⬇️
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;