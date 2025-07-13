import React from 'react';
import { motion } from 'framer-motion';

const WeddingInfo = ({ darkMode }) => {
  const weddingDetails = [
    {
      icon: '🏰',
      title: 'The Chapel',
      info: 'Little White Chapel',
      details: '1301 Las Vegas Blvd S, Las Vegas, NV 89104',
      note: 'Where legends get married! 💫'
    },
    {
      icon: '⏰',
      title: 'When',
      info: 'December 25, 2024',
      details: '6:00 PM - 8:00 PM',
      note: 'Christmas magic meets Vegas vibes! 🎄'
    },
    {
      icon: '🕺',
      title: 'Special Guest',
      info: 'Elvis Presley',
      details: 'Live performance & ceremony officiant',
      note: 'Thank ya, thank ya very much! 👑'
    },
    {
      icon: '🍾',
      title: 'After Party',
      info: 'Neon Diner',
      details: 'Milkshakes, burgers & celebration!',
      note: 'Keep the party rolling! 🎉'
    }
  ];

  return (
    <section className={`py-20 ${
      darkMode ? 'bg-gradient-to-br from-black to-purple-900' : 'bg-gradient-to-br from-yellow-100 to-pink-100'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`neon-text text-4xl md:text-6xl font-black mb-4 ${
            darkMode ? 'text-neon-blue' : 'text-neon-pink'
          }`}>
            WEDDING INFO
          </h2>
          <div className={`script-text text-2xl ${
            darkMode ? 'text-neon-gold' : 'text-neon-purple'
          }`}>
            All the deets for our big day! 📋✨
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {weddingDetails.map((detail, index) => (
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
                <div className="text-5xl mb-4">{detail.icon}</div>
                <h3 className={`neon-text text-xl font-bold mb-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-blue'
                }`}>
                  {detail.title}
                </h3>
                <div className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-neon-pink' : 'text-neon-purple'
                }`}>
                  {detail.info}
                </div>
                <div className={`text-sm mb-3 ${
                  darkMode ? 'text-neon-cream' : 'text-gray-600'
                }`}>
                  {detail.details}
                </div>
                <div className={`script-text text-sm ${
                  darkMode ? 'text-neon-gold' : 'text-neon-blue'
                }`}>
                  {detail.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className={`casino-card p-8 max-w-3xl mx-auto ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className={`neon-text text-2xl font-bold mb-4 ${
              darkMode ? 'text-neon-gold' : 'text-neon-pink'
            }`}>
              DRESS CODE
            </h3>
            <div className={`text-lg mb-4 ${
              darkMode ? 'text-neon-cream' : 'text-gray-700'
            }`}>
              <strong>Theme:</strong> Vegas Glam meets Retro Fun!
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className={`${darkMode ? 'text-neon-pink' : 'text-neon-purple'}`}>
                <strong>✨ Encouraged:</strong><br/>
                Sequins, metallics, bold colors, bow ties, cocktail dresses, fun patterns
              </div>
              <div className={`${darkMode ? 'text-neon-mint' : 'text-neon-blue'}`}>
                <strong>🎲 Optional:</strong><br/>
                Sunglasses indoors, feathers, glitter, vintage Vegas vibes
              </div>
            </div>
            <div className={`script-text text-lg mt-4 ${
              darkMode ? 'text-neon-gold' : 'text-neon-purple'
            }`}>
              Come as you are, but make it sparkle! ✨
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;