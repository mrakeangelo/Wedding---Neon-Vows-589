import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEdit, FiSave, FiLock, FiUnlock } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const AdminPanel = ({ darkMode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);

  const [siteData, setSiteData] = useState({
    coupleName: 'JACK & JILL',
    weddingDate: 'December 25, 2024',
    weddingTime: '6:00 PM',
    venue: 'Little White Chapel',
    venueAddress: '1301 Las Vegas Blvd S, Las Vegas, NV 89104'
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'neonvows2024') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    console.log('Saving site data:', siteData);
    setEditMode(false);
    alert('Changes saved successfully!');
  };

  const handleInputChange = (field, value) => {
    setSiteData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isAuthenticated) {
    return (
      <section className={`min-h-screen flex items-center justify-center pt-20 ${
        darkMode ? 'bg-gradient-to-br from-black via-purple-900 to-black' : 'bg-gradient-to-br from-neon-cream via-yellow-100 to-pink-100'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`casino-card p-8 max-w-md mx-auto ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}
        >
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">🔒</div>
            <h2 className={`neon-text text-2xl font-bold ${
              darkMode ? 'text-neon-gold' : 'text-neon-pink'
            }`}>
              ADMIN ACCESS
            </h2>
            <p className={`text-sm mt-2 ${
              darkMode ? 'text-neon-cream' : 'text-gray-600'
            }`}>
              Enter password to access admin panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className={`w-full p-3 rounded border-2 ${
                darkMode 
                  ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                  : 'bg-white border-neon-purple text-gray-800'
              } focus:outline-none focus:border-neon-pink`}
              required
            />
            
            <motion.button
              type="submit"
              className="retro-button w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🎰 LOGIN 🎰
            </motion.button>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`min-h-screen pt-20 ${
      darkMode ? 'bg-gradient-to-br from-black via-purple-900 to-black' : 'bg-gradient-to-br from-neon-cream via-yellow-100 to-pink-100'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className={`neon-text text-4xl md:text-6xl font-black mb-4 ${
            darkMode ? 'text-neon-gold' : 'text-neon-pink'
          }`}>
            ADMIN PANEL
          </h1>
          <div className={`script-text text-xl ${
            darkMode ? 'text-neon-mint' : 'text-neon-blue'
          }`}>
            Control your wedding website! 🎛️
          </div>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`casino-card p-6 mb-8 ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              onClick={() => setEditMode(!editMode)}
              className={`flex items-center space-x-2 px-4 py-2 rounded ${
                editMode 
                  ? 'bg-neon-gold text-black' 
                  : darkMode 
                    ? 'bg-neon-pink text-white' 
                    : 'bg-neon-purple text-white'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiEdit} className="w-4 h-4" />
              <span>{editMode ? 'Exit Edit' : 'Edit Mode'}</span>
            </motion.button>

            <motion.button
              onClick={() => setPreviewMode(!previewMode)}
              className={`flex items-center space-x-2 px-4 py-2 rounded ${
                previewMode 
                  ? 'bg-neon-mint text-black' 
                  : darkMode 
                    ? 'bg-neon-blue text-white' 
                    : 'bg-neon-blue text-white'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiEye} className="w-4 h-4" />
              <span>{previewMode ? 'Exit Preview' : 'Preview'}</span>
            </motion.button>

            <motion.button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 rounded bg-green-500 text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiSave} className="w-4 h-4" />
              <span>Save Changes</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Website Settings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`casino-card p-6 ${
              darkMode ? 'bg-black/80' : 'bg-white/90'
            }`}
          >
            <h3 className={`neon-text text-xl font-bold mb-4 ${
              darkMode ? 'text-neon-pink' : 'text-neon-blue'
            }`}>
              🎰 WEBSITE SETTINGS
            </h3>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-purple'
                }`}>
                  Couple Names
                </label>
                <input
                  type="text"
                  value={siteData.coupleName}
                  onChange={(e) => handleInputChange('coupleName', e.target.value)}
                  disabled={!editMode}
                  className={`w-full p-3 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink ${
                    !editMode ? 'opacity-50' : ''
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-purple'
                }`}>
                  Wedding Date
                </label>
                <input
                  type="text"
                  value={siteData.weddingDate}
                  onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                  disabled={!editMode}
                  className={`w-full p-3 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink ${
                    !editMode ? 'opacity-50' : ''
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-purple'
                }`}>
                  Wedding Time
                </label>
                <input
                  type="text"
                  value={siteData.weddingTime}
                  onChange={(e) => handleInputChange('weddingTime', e.target.value)}
                  disabled={!editMode}
                  className={`w-full p-3 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink ${
                    !editMode ? 'opacity-50' : ''
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-neon-mint' : 'text-neon-purple'
                }`}>
                  Venue Name
                </label>
                <input
                  type="text"
                  value={siteData.venue}
                  onChange={(e) => handleInputChange('venue', e.target.value)}
                  disabled={!editMode}
                  className={`w-full p-3 rounded border-2 ${
                    darkMode 
                      ? 'bg-gray-800 border-neon-gold text-neon-cream' 
                      : 'bg-white border-neon-purple text-gray-800'
                  } focus:outline-none focus:border-neon-pink ${
                    !editMode ? 'opacity-50' : ''
                  }`}
                />
              </div>
            </div>
          </motion.div>

          {/* Site Status */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`casino-card p-6 ${
              darkMode ? 'bg-black/80' : 'bg-white/90'
            }`}
          >
            <h3 className={`neon-text text-xl font-bold mb-4 ${
              darkMode ? 'text-neon-gold' : 'text-neon-pink'
            }`}>
              🎲 SITE STATUS
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`${darkMode ? 'text-neon-cream' : 'text-gray-700'}`}>
                  Draft Mode
                </span>
                <motion.button
                  onClick={() => setIsDraft(!isDraft)}
                  className={`px-4 py-2 rounded ${
                    isDraft 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-green-500 text-white'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isDraft ? 'DRAFT' : 'LIVE'}
                </motion.button>
              </div>

              <div className="flex items-center justify-between">
                <span className={`${darkMode ? 'text-neon-cream' : 'text-gray-700'}`}>
                  Password Protected
                </span>
                <motion.button
                  onClick={() => setIsPasswordProtected(!isPasswordProtected)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded ${
                    isPasswordProtected 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-500 text-white'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={isPasswordProtected ? FiLock : FiUnlock} className="w-4 h-4" />
                  <span>{isPasswordProtected ? 'ON' : 'OFF'}</span>
                </motion.button>
              </div>

              <div className={`p-4 rounded border-2 ${
                darkMode 
                  ? 'bg-gray-800 border-neon-mint text-neon-cream' 
                  : 'bg-gray-50 border-neon-blue text-gray-700'
              }`}>
                <h4 className="font-bold mb-2">Site Statistics</h4>
                <div className="text-sm space-y-1">
                  <div>Total Visitors: 247</div>
                  <div>RSVPs Received: 23</div>
                  <div>Guestbook Messages: 8</div>
                  <div>Registry Contributions: 12</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Preview Banner */}
        {previewMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-20 left-0 right-0 bg-neon-gold text-black text-center py-2 font-bold z-40"
          >
            🎭 PREVIEW MODE - This is how your site looks to visitors 🎭
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AdminPanel;