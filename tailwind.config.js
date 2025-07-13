/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF006E',
          blue: '#0099FF',
          mint: '#40E0D0',
          gold: '#FFD700',
          cream: '#FFF8DC',
          black: '#1a1a1a',
          purple: '#9D4EDD'
        }
      },
      fontFamily: {
        'retro': ['Impact', 'Arial Black', 'sans-serif'],
        'script': ['Brush Script MT', 'cursive'],
        'mono': ['Courier New', 'monospace']
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'slot-spin': 'slot-spin 0.5s ease-in-out',
        'flash': 'flash 0.5s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glimmer': 'glimmer 2s ease-in-out infinite'
      },
      keyframes: {
        'neon-pulse': {
          '0%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' }
        },
        'slot-spin': {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(360deg)' }
        },
        'flash': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        'glimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
}