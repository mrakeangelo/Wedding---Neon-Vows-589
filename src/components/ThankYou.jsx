import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ThankYou = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <section className={`min-h-screen flex items-center justify-center ${
      darkMode ? 'bg-gradient-to-br from-black via-purple-900 to-black' : 'bg-gradient-to-br from-neon-cream via-yellow-100 to-pink-100'
    }`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`casino-card p-12 max-w-3xl mx-auto ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}
        >
          <motion.div
            className="text-8xl mb-8"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🎰
          </motion.div>

          <motion.div
            className="overflow-hidden mb-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          >
            <motion.h1
              className={`neon-text text-4xl md:text-6xl font-black marquee-text ${
                darkMode ? 'text-neon-gold' : 'text-neon-pink'
              }`}
              animate={{ 
                textShadow: [
                  '0 0 20px currentColor',
                  '0 0 40px currentColor, 0 0 60px currentColor',
                  '0 0 20px currentColor'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉 YOU'RE A WINNER! 🎉
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`script-text text-2xl mb-8 ${
              darkMode ? 'text-neon-mint' : 'text-neon-blue'
            }`}
          >
            Thanks for being part of our wild love story! 💕
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-lg mb-8 ${
              darkMode ? 'text-neon-cream' : 'text-gray-600'
            }`}
          >
            <p className="mb-4">
              Your RSVP, message, or contribution means the world to us! 
              We can't wait to celebrate with you in Vegas.
            </p>
            <p>
              Get ready for the most electric wedding ever! 
              It's going to be absolutely legendary! ⚡
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-4"
          >
            <motion.button
              onClick={() => navigate('/')}
              className="retro-button mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎲 BACK TO MAIN 🎲
            </motion.button>
            
            <div className={`text-sm ${
              darkMode ? 'text-neon-cream' : 'text-gray-500'
            }`}>
              Questions? Email us at jackandjill@neonvows.com
            </div>
          </motion.div>

          <motion.div
            className="mt-8 pt-8 border-t-2 border-neon-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className={`text-2xl mb-2 ${
              darkMode ? 'text-neon-pink' : 'text-neon-purple'
            }`}>
              🎭 Save the Date 🎭
            </div>
            <div className={`text-lg font-bold ${
              darkMode ? 'text-neon-gold' : 'text-neon-blue'
            }`}>
              December 25, 2024 • 6:00 PM
            </div>
            <div className={`text-sm ${
              darkMode ? 'text-neon-cream' : 'text-gray-600'
            }`}>
              Little White Chapel, Las Vegas
            </div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute text-2xl ${
                darkMode ? 'text-neon-pink' : 'text-neon-blue'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {['🎰', '💎', '🎲', '⭐', '💕'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThankYou;