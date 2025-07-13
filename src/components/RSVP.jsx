import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const RSVP = ({ darkMode, setShowConfetti }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    dietaryRestrictions: '',
    bringingSequins: false,
    needChips: false,
    elvisRequest: false,
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowConfetti(true);
    
    // Hide confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    // Reset form after animation
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        attending: '',
        guests: '1',
        dietaryRestrictions: '',
        bringingSequins: false,
        needChips: false,
        elvisRequest: false,
        specialRequests: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <section id="rsvp" className={`py-20 ${
        darkMode ? 'bg-gradient-to-br from-purple-900 to-black' : 'bg-gradient-to-br from-pink-100 to-yellow-100'
      }`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className={`casino-card p-12 max-w-2xl mx-auto ${
              darkMode ? 'bg-black/80' : 'bg-white/90'
            }`}>
              <motion.div
                className="text-8xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
              >
                🎰
              </motion.div>
              
              <motion.h2
                className={`neon-text text-4xl font-black mb-4 ${
                  darkMode ? 'text-neon-gold' : 'text-neon-pink'
                }`}
                animate={{ 
                  textShadow: [
                    '0 0 20px currentColor',
                    '0 0 40px currentColor',
                    '0 0 20px currentColor'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                JACKPOT!
              </motion.h2>
              
              <div className={`script-text text-2xl mb-6 ${
                darkMode ? 'text-neon-mint' : 'text-neon-blue'
              }`}>
                Your RSVP hit the jackpot! 🎉
              </div>
              
              <div className={`text-lg ${
                darkMode ? 'text-neon-cream' : 'text-gray-600'
              }`}>
                We can't wait to celebrate with you in Vegas! 
                Get ready for the wildest wedding ever! 🎲✨
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className={`py-20 ${
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
            darkMode ? 'text-neon-pink' : 'text-neon-blue'
          }`}>
            RSVP
          </h2>
          <div className={`script-text text-2xl ${
            darkMode ? 'text-neon-gold' : 'text-neon-purple'
          }`}>
            Place your bet on fun! 🎰
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`casino-card p-8 max-w-2xl mx-auto ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-blue'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink`}
                  placeholder="Your fabulous name"
                />
              </div>

              <div>
                <label className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-blue'
                }`}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink`}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-bold mb-2 ${
                darkMode ? 'text-neon-mint' : 'text-neon-blue'
              }`}>
                Will you be attending? *
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className={`flex items-center ${
                    darkMode ? 'text-neon-cream' : 'text-gray-700'
                  }`}>
                    <SafeIcon icon={FiCheck} className="w-4 h-4 mr-1 text-green-500" />
                    Yes! Let's party! 🎉
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className={`flex items-center ${
                    darkMode ? 'text-neon-cream' : 'text-gray-700'
                  }`}>
                    <SafeIcon icon={FiX} className="w-4 h-4 mr-1 text-red-500" />
                    Can't make it 😢
                  </span>
                </label>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6"
              >
                <div>
                  <label className={`block text-sm font-bold mb-2 ${
                    darkMode ? 'text-neon-mint' : 'text-neon-blue'
                  }`}>
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border-2 ${
                      darkMode 
                        ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                        : 'bg-white border-neon-purple text-gray-800'
                    } focus:outline-none focus:border-neon-pink`}
                  >
                    <option value="1">Just me! 🕺</option>
                    <option value="2">Me + 1 💃</option>
                    <option value="3">Me + 2 🎭</option>
                    <option value="4">Me + 3 🎪</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <h3 className={`text-lg font-bold ${
                    darkMode ? 'text-neon-gold' : 'text-neon-purple'
                  }`}>
                    Vegas Essentials 🎲
                  </h3>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="bringingSequins"
                      checked={formData.bringingSequins}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <span className={`${darkMode ? 'text-neon-cream' : 'text-gray-700'}`}>
                      Bringing sequins? ✨
                    </span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="needChips"
                      checked={formData.needChips}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <span className={`${darkMode ? 'text-neon-cream' : 'text-gray-700'}`}>
                      Need casino chips? 🎰
                    </span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="elvisRequest"
                      checked={formData.elvisRequest}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <span className={`${darkMode ? 'text-neon-cream' : 'text-gray-700'}`}>
                      Want to sing with Elvis? 🕺
                    </span>
                  </label>
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${
                    darkMode ? 'text-neon-mint' : 'text-neon-blue'
                  }`}>
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border-2 ${
                      darkMode 
                        ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                        : 'bg-white border-neon-purple text-gray-800'
                    } focus:outline-none focus:border-neon-pink`}
                    placeholder="Any food allergies or preferences?"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${
                    darkMode ? 'text-neon-mint' : 'text-neon-blue'
                  }`}>
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full p-3 rounded border-2 ${
                      darkMode 
                        ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                        : 'bg-white border-neon-purple text-gray-800'
                    } focus:outline-none focus:border-neon-pink`}
                    placeholder="Any wild requests? We're all ears! 🎪"
                  />
                </div>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="retro-button w-full text-lg py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🎰 SUBMIT RSVP 🎰
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;