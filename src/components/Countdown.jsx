import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ darkMode }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2024-12-25T18:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <motion.div
        key={value}
        className={`slot-machine-digit w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-3xl font-black ${
          darkMode ? 'text-neon-gold' : 'text-neon-purple'
        }`}
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 360 }}
        transition={{ duration: 0.5 }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className={`text-sm md:text-base font-bold mt-2 ${
        darkMode ? 'text-neon-pink' : 'text-neon-blue'
      }`}>
        {label}
      </div>
    </motion.div>
  );

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
            darkMode ? 'text-neon-mint' : 'text-neon-pink'
          }`}>
            COUNTDOWN
          </h2>
          <div className={`script-text text-2xl ${
            darkMode ? 'text-neon-gold' : 'text-neon-purple'
          }`}>
            Time until we say "I do!" 💍
          </div>
        </motion.div>

        <div className={`casino-card p-8 max-w-4xl mx-auto ${
          darkMode ? 'bg-black/80' : 'bg-white/90'
        }`}>
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎰</div>
            <h3 className={`neon-text text-2xl font-bold ${
              darkMode ? 'text-neon-blue' : 'text-neon-purple'
            }`}>
              THE JACKPOT TIMER
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center">
            <TimeUnit value={timeLeft.days} label="DAYS" index={0} />
            <TimeUnit value={timeLeft.hours} label="HOURS" index={1} />
            <TimeUnit value={timeLeft.minutes} label="MINUTES" index={2} />
            <TimeUnit value={timeLeft.seconds} label="SECONDS" index={3} />
          </div>

          <motion.div
            className="text-center mt-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={`script-text text-xl ${
              darkMode ? 'text-neon-gold' : 'text-neon-blue'
            }`}>
              {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 
                ? "🎉 IT'S TIME TO GET MARRIED! 🎉" 
                : "Every second counts when you're in love! 💕"}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className={`text-lg ${darkMode ? 'text-neon-cream' : 'text-gray-600'}`}>
            <span className="text-2xl mr-2">🎲</span>
            Rolling the dice on forever!
            <span className="text-2xl ml-2">🎲</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;