const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  darkMode:'class',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}']
  },
  theme: {
    extend: {
      fontFamily:{
        body: ['Alegreya Sans'],
        title:['Inter', 'sans-serif'],
        decotitle:['Raleway','sans-serif'],
      },  
      letterSpacing: {
        x:'.2rem',
        xl:'.4rem',
        xxl: '1.3rem'
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('tailwindcss'),
    require('autoprefixer')
  ],
};
