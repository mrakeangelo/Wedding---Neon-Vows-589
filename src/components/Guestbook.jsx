import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Guestbook = ({ darkMode }) => {
  const [messages, setMessages] = useState([
    {
      name: 'Sarah & Mike',
      message: 'Can\'t wait to see you two lovebirds tie the knot! Vegas here we come! 🎰💕',
      timestamp: '2 days ago'
    },
    {
      name: 'The Johnson Family',
      message: 'So excited for your wild wedding adventure! We\'re bringing our dancing shoes! 💃🕺',
      timestamp: '1 week ago'
    },
    {
      name: 'Aunt Betty',
      message: 'Never thought I\'d be going to Vegas for a wedding, but here we are! Love you both! 😘',
      timestamp: '2 weeks ago'
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    name: '',
    message: ''
  });

  const [showJackpot, setShowJackpot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      setMessages(prev => [{
        ...newMessage,
        timestamp: 'Just now'
      }, ...prev]);
      
      setNewMessage({ name: '', message: '' });
      setShowJackpot(true);
      
      setTimeout(() => {
        setShowJackpot(false);
      }, 3000);
    }
  };

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
            darkMode ? 'text-neon-mint' : 'text-neon-purple'
          }`}>
            SIGN THE SLOT BOOK
          </h2>
          <div className={`script-text text-2xl ${
            darkMode ? 'text-neon-gold' : 'text-neon-blue'
          }`}>
            Leave us your lucky wishes! 🍀
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`casino-card p-8 mb-12 ${
              darkMode ? 'bg-black/80' : 'bg-white/90'
            }`}
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-2">🎰</div>
              <h3 className={`neon-text text-2xl font-bold ${
                darkMode ? 'text-neon-pink' : 'text-neon-blue'
              }`}>
                PULL THE LEVER & LEAVE A MESSAGE
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name or couple name"
                  className={`w-full p-4 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink text-lg`}
                  required
                />
              </div>

              <div>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Share your wishes, advice, or funny memories!"
                  rows="4"
                  className={`w-full p-4 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink text-lg`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="retro-button w-full text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🎲 SPIN & SIGN 🎲
              </motion.button>
            </form>
          </motion.div>

          {/* Jackpot Animation */}
          {showJackpot && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center mb-8"
            >
              <div className={`casino-card p-6 ${
                darkMode ? 'bg-black/80' : 'bg-white/90'
              }`}>
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1, repeat: 2 }}
                >
                  🎰
                </motion.div>
                <motion.h3
                  className={`neon-text text-3xl font-black ${
                    darkMode ? 'text-neon-gold' : 'text-neon-pink'
                  }`}
                  animate={{ 
                    textShadow: [
                      '0 0 20px currentColor',
                      '0 0 40px currentColor',
                      '0 0 20px currentColor'
                    ]
                  }}
                  transition={{ duration: 0.5, repeat: 4 }}
                >
                  JACKPOT!
                </motion.h3>
                <div className={`script-text text-xl mt-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-blue'
                }`}>
                  Your message hit the jackpot! 🎉
                </div>
              </div>
            </motion.div>
          )}

          {/* Messages Display */}
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`casino-card p-6 ${
                  darkMode ? 'bg-black/80' : 'bg-white/90'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💬</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className={`font-bold ${
                        darkMode ? 'text-neon-mint' : 'text-neon-blue'
                      }`}>
                        {msg.name}
                      </h4>
                      <span className={`text-xs ${
                        darkMode ? 'text-neon-cream' : 'text-gray-500'
                      }`}>
                        {msg.timestamp}
                      </span>
                    </div>
                    <p className={`${
                      darkMode ? 'text-neon-cream' : 'text-gray-700'
                    }`}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className={`text-lg ${
              darkMode ? 'text-neon-cream' : 'text-gray-600'
            }`}>
              <span className="text-2xl mr-2">🎲</span>
              Every message is a winning combination!
              <span className="text-2xl ml-2">🎲</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;