/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'xs': '319px',     // Extra small devices (phones)
      'iphone11': '414px',     // Small devices (large phones/tablets)
      'sm': "430",
      "xr": "414",
      'md': '768px',     // Medium devices (tablets)
      'lg': '1024px',    // Large devices (laptops/desktops)
    },
    extend: {
      // Add custom container sizes for each breakpoint
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        fontSize: {
          'custom-small': '12px',      // A custom font size
          'custom-medium': '18px',     // Another custom font size
          'custom-large': '36px',      // A larger custom font size
        }
      },
    },
  },
  plugins: [],
}

