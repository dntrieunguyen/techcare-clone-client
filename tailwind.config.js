/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   theme: {
      fontSize: {
         'md-content': '14px',
         content: '12px',
      },
      extend: {
         colors: {
            main: '#F49B00',
            secondary: '#EF1200',
            // ...
         },
      },
   },
   plugins: [],
};
