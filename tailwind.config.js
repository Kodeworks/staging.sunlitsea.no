module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'wh-2': {'raw': 'screen and (min-width: 560px) and (min-height: 420px)'},
        'wh-1': {'raw': 'screen and (min-width: 640px) and (min-height: 480px)'},
        'wh0': {'raw': 'screen and (min-width: 720px) and (min-height: 540px)'},
        'wh1': {'raw': 'screen and (min-width: 768px) and (min-height: 576px)'},
        'wh2': {'raw': 'screen and (min-width: 800px) and (min-height: 600px)'},
        'wh3': {'raw': 'screen and (min-width: 960px) and (min-height: 720px)'},
        'wh4': {'raw': 'screen and (min-width: 1024px) and (min-height: 768px)'},
        'wh5': {'raw': 'screen and (min-width: 1280px) and (min-height: 960px)'},
        'wh6': {'raw': 'screen and (min-width: 1400px) and (min-height: 1050px)'},
        'wh7': {'raw': 'screen and (min-width: 1600px) and (min-height: 1200px)'},
        'wh8': {'raw': 'screen and (min-width: 1856px) and (min-height: 1392px)'},
        'wh9': {'raw': 'screen and (min-width: 1920px) and (min-height: 1440px)'},
        'wh10': {'raw': 'screen and (min-width: 2048px) and (min-height: 1536px)'},
      },
      fontSize:{
        'xs2': '0.625rem',
        'xs3': '0.5rem'
      },
      fontFamily: {
        headline: ['Everett', 'sans-serif'],
        body: ['Everett', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif']
      },
      colors: {
        primary: {
          default: '#FFE775',
          50: '#FFF7C6',
          100: '#FFF1A3',
          200: '#FFE775',
          300: '#FFD46F',
          400: '#FFC269',
          500: '#FFAF63',
          600: '#FF9C5D',
          700: '#FF8A57',
          800: '#FF7751',
          900: '#FF6242',
        },
        secondary: {
          default: '#5A62BA',
          50: '#EBEFFF',
          100: '#E1E7FA',
          200: '#CBD3F0',
          300: '#B4BCE8',
          400: '#979FD9',
          500: '#737CC7',
          600: '#5A62BA',
          700: '#4B5494',
          800: '#3D446B',
          900: '#2F354F',
        },
        gray: {
          default: '#101010',
          50: '#F5F5F5',
          100: '#EDEDED',
          200: '#E1E1E1',
          300: '#CECECE',
          400: '#B8B8B8',
          500: '#929292',
          600: '#737373',
          700: '#595959',
          800: '#3B3B3B',
          900: '#101010',
        },
        alert: '#B0004A',
        'alert-light': '#F7E8F0',
        'support-light': '#81D5C8',
        'support-dark': '#437E84',
      },
      scale: {
        '101': '1.01',
        '106': '1.06',
      },
      inset: {
        '100p': '100%',
        '1': '0.25rem',
        '15': '3.75rem',
      },
      flex: {
        'grow-no-shrink': '1 0 auto',
      },
      spacing: {
        '120': '30rem',
        '156': '39rem',
        '230': '57rem'
      }
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    extendedSpacingScale: true,
    extendedFontSizeScale: true,
    defaultLineHeights: true,
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
