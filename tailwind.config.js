module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
  plugins: [],
};
