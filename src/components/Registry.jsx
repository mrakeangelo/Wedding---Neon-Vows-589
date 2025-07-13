import React from 'react';
import { motion } from 'framer-motion';

const Registry = ({ darkMode }) => {
  const registryItems = [
    {
      icon: '🏖️',
      title: 'Honeymoon Fund',
      description: 'Help us make memories in paradise!',
      amount: '$50 - $500',
      category: 'experiences'
    },
    {
      icon: '🎰',
      title: 'Vegas Fund',
      description: 'Extra chips for our wedding night!',
      amount: '$25 - $100',
      category: 'fun'
    },
    {
      icon: '🍾',
      title: 'Champagne Toast',
      description: 'Bubbly for our celebration!',
      amount: '$30 - $150',
      category: 'drinks'
    },
    {
      icon: '🎭',
      title: 'Date Night Fund',
      description: 'Adventures for our first year!',
      amount: '$40 - $200',
      category: 'experiences'
    },
    {
      icon: '🏠',
      title: 'New Home Fund',
      description: 'Building our nest together!',
      amount: '$75 - $300',
      category: 'home'
    },
    {
      icon: '🎪',
      title: 'Anniversary Fund',
      description: 'Celebrating every year in style!',
      amount: '$50 - $250',
      category: 'experiences'
    }
  ];

  const getCategoryColor = (category) => {
    if (darkMode) {
      switch (category) {
        case 'experiences': return 'text-neon-pink';
        case 'fun': return 'text-neon-gold';
        case 'drinks': return 'text-neon-mint';
        case 'home': return 'text-neon-blue';
        default: return 'text-neon-cream';
      }
    } else {
      switch (category) {
        case 'experiences': return 'text-neon-purple';
        case 'fun': return 'text-neon-blue';
        case 'drinks': return 'text-neon-pink';
        case 'home': return 'text-neon-purple';
        default: return 'text-gray-600';
      }
    }
  };

  return (
    <section className={`py-20 ${
      darkMode ? 'bg-gradient-to-br from-purple-900 to-black' : 'bg-gradient-to-br from-pink-100 to-yellow-100'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`neon-text text-4xl md:text-6xl font-black mb-4 ${
            darkMode ? 'text-neon-gold' : 'text-neon-pink'
          }`}>
            CHIP IN FOR FUN
          </h2>
          <div className={`script-text text-2xl ${
            darkMode ? 'text-neon-mint' : 'text-neon-blue'
          }`}>
            Our registry is all about experiences! 🎲
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`casino-card p-8 mb-12 max-w-3xl mx-auto ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}
        >
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">🎰</div>
            <h3 className={`neon-text text-2xl font-bold mb-4 ${
              darkMode ? 'text-neon-pink' : 'text-neon-purple'
            }`}>
              CASINO CATALOG
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-neon-cream' : 'text-gray-600'
            }`}>
              We're all about making memories, not collecting stuff! 
              Your contribution helps us create amazing experiences together.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`casino-card p-6 ${
                darkMode ? 'bg-black/80' : 'bg-white/90'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`neon-text text-xl font-bold mb-2 ${
                  getCategoryColor(item.category)
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-neon-cream' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
                <div className={`text-lg font-bold mb-4 ${
                  darkMode ? 'text-neon-gold' : 'text-neon-purple'
                }`}>
                  {item.amount}
                </div>
                <motion.button
                  className={`retro-button w-full ${
                    darkMode 
                      ? 'bg-gradient-to-r from-neon-pink to-neon-blue' 
                      : 'bg-gradient-to-r from-neon-purple to-neon-pink'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎲 CONTRIBUTE 🎲
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className={`casino-card p-8 max-w-2xl mx-auto ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}>
            <div className="text-4xl mb-4">💝</div>
            <h3 className={`neon-text text-2xl font-bold mb-4 ${
              darkMode ? 'text-neon-mint' : 'text-neon-blue'
            }`}>
              CASH BAR & TIPS
            </h3>
            <p className={`text-lg mb-4 ${
              darkMode ? 'text-neon-cream' : 'text-gray-600'
            }`}>
              Prefer to contribute in person? We'll have a "wishing well" 
              at the reception for cash gifts and tips for our amazing vendors!
            </p>
            <div className={`script-text text-xl ${
              darkMode ? 'text-neon-gold' : 'text-neon-purple'
            }`}>
              Your presence is the best present! 💕
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;