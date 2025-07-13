import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';

const Header = ({ darkMode, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode ? 'bg-black/90' : 'bg-white/90'
      } backdrop-blur-sm border-b-2 border-neon-gold`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-2xl">💍</span>
          <span className={`neon-text text-xl ${
            darkMode ? 'text-neon-pink' : 'text-neon-blue'
          }`}>
            NEON VOWS
          </span>
        </motion.div>

        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-neon-pink text-white hover:bg-neon-blue' 
                : 'bg-neon-blue text-white hover:bg-neon-pink'
            } transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SafeIcon icon={darkMode ? FiSun : FiMoon} className="w-5 h-5" />
            <span className="sr-only">
              {darkMode ? 'Daylight Wedding' : 'Neon Night Ceremony'}
            </span>
          </motion.button>

          <motion.button
            onClick={() => navigate('/admin')}
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-neon-gold text-black hover:bg-neon-mint' 
                : 'bg-neon-purple text-white hover:bg-neon-gold'
            } transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SafeIcon icon={FiSettings} className="w-5 h-5" />
            <span className="sr-only">Admin Panel</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;