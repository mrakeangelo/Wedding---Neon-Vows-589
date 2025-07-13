import React from 'react';
import { motion } from 'framer-motion';

const OurStory = ({ darkMode }) => {
  const storyEvents = [
    {
      emoji: '🎲',
      title: 'First Roll',
      date: 'March 2023',
      story: 'Met at a casino night fundraiser. Jack bet everything on red, Jill said "That\'s crazy!" Been crazy about each other ever since! 💕',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=200&fit=crop'
    },
    {
      emoji: '🎰',
      title: 'Jackpot Moment',
      date: 'July 2023',
      story: 'Our first Vegas trip together! Lost $20 at slots but won each other\'s hearts. Elvis impersonator photobombed our selfie! 🕺',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop'
    },
    {
      emoji: '💍',
      title: 'All In',
      date: 'October 2024',
      story: 'Jack proposed with a ring hidden in a slot machine! (Okay, it was a toy one, but still!) She said YES faster than a Vegas minute! ⚡',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop'
    },
    {
      emoji: '🎊',
      title: 'Wedding Bells',
      date: 'December 2024',
      story: 'Why wait? Life\'s too short and love\'s too wild! Let\'s do this thing in the city of lights and dreams! 🌟',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section id="story" className={`py-20 ${
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
            darkMode ? 'text-neon-gold' : 'text-neon-purple'
          }`}>
            OUR WILD STORY
          </h2>
          <div className={`script-text text-2xl ${
            darkMode ? 'text-neon-pink' : 'text-neon-blue'
          }`}>
            From strangers to soulmates in record time! 🚀
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {storyEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`casino-card p-6 ${
                darkMode ? 'bg-black/80' : 'bg-white/90'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{event.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className={`neon-text text-xl font-bold ${
                      darkMode ? 'text-neon-mint' : 'text-neon-blue'
                    }`}>
                      {event.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-mono ${
                      darkMode 
                        ? 'bg-neon-gold text-black' 
                        : 'bg-neon-purple text-white'
                    }`}>
                      {event.date}
                    </span>
                  </div>
                  
                  <div className="polaroid-frame mb-4">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-32 object-cover rounded"
                      loading="lazy"
                    />
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${
                    darkMode ? 'text-neon-cream' : 'text-gray-700'
                  }`}>
                    {event.story}
                  </p>
                </div>
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
            <div className="text-6xl mb-4">🎭</div>
            <h3 className={`neon-text text-2xl font-bold mb-4 ${
              darkMode ? 'text-neon-pink' : 'text-neon-purple'
            }`}>
              THE MORAL OF THE STORY
            </h3>
            <p className={`script-text text-xl ${
              darkMode ? 'text-neon-gold' : 'text-neon-blue'
            }`}>
              "Sometimes the best bets are the ones you make with your heart! 💖"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;