import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Gallery = ({ darkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      caption: 'Our first Vegas adventure! 🎰',
      polaroidNote: 'Beginners luck!'
    },
    {
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop',
      caption: 'The proposal moment! 💍',
      polaroidNote: 'She said YES!'
    },
    {
      src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop',
      caption: 'Vegas nights & neon lights 🌟',
      polaroidNote: 'City of dreams'
    },
    {
      src: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop',
      caption: 'Casino night fundraiser 🎲',
      polaroidNote: 'Where it all began'
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
      caption: 'Planning our big day! 📝',
      polaroidNote: 'Dreams coming true'
    },
    {
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop',
      caption: 'Engagement party vibes! 🎉',
      polaroidNote: 'Party time!'
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
            darkMode ? 'text-neon-gold' : 'text-neon-blue'
          }`}>
            MEMORY LANE
          </h2>
          <div className={`script-text text-2xl ${
            darkMode ? 'text-neon-pink' : 'text-neon-purple'
          }`}>
            Snapshots of our love story! 📸✨
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="polaroid-frame cursor-pointer"
              onClick={() => setSelectedImage(photo)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode 
                  ? '0 0 30px rgba(255, 0, 110, 0.6)' 
                  : '0 0 30px rgba(0, 153, 255, 0.6)'
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-48 object-cover rounded"
                loading="lazy"
              />
              <div className="mt-3 text-center">
                <div className={`script-text text-sm ${
                  darkMode ? 'text-neon-purple' : 'text-neon-blue'
                }`}>
                  {photo.polaroidNote}
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
          <div className={`casino-card p-6 max-w-2xl mx-auto ${
            darkMode ? 'bg-black/80' : 'bg-white/90'
          }`}>
            <div className="text-4xl mb-4">📷</div>
            <h3 className={`neon-text text-xl font-bold mb-2 ${
              darkMode ? 'text-neon-mint' : 'text-neon-pink'
            }`}>
              PHOTO BOOTH
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-neon-cream' : 'text-gray-600'
            }`}>
              Snap your own memories at our wedding! Look for the neon photo booth sign.
            </p>
            <div className={`script-text text-lg mt-2 ${
              darkMode ? 'text-neon-gold' : 'text-neon-purple'
            }`}>
              Say cheese! 📸✨
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-neon-pink transition-colors"
              >
                <SafeIcon icon={FiX} className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="text-center mt-4">
                <div className="text-white text-lg font-semibold">
                  {selectedImage.caption}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;