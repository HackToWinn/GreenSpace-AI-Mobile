/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JakartaSans', 'sans-serif'],
        bold: ['JakartaSans-Bold', 'sans-serif'],
        boldItalic: ['JakartaSans-BoldItalic', 'sans-serif'],
        extraBold: ['JakartaSans-ExtraBold'],
        extraBoldItalic: ['JakartaSans-ExtraBoldItalic', 'sans-serif'],
        extraLight: ['JakartaSans-ExtraLight', 'sans-serif'],
        extraLightItalic: ['JakartaSans-ExtraLightItalic', 'sans-serif'],
        italic: ['JakartaSans-Italic', 'sans-serif'],
        light: ['JakartaSans-Light', 'sans-serif'],
        lightItalic: ['JakartaSans-LightItalic', 'sans-serif'],
        medium: ['JakartaSans-Medium', 'sans-serif'],
        mediumItalic: ['JakartaSans-MediumItalic', 'sans-serif'],
        regular: ['JakartaSans-Regular', 'sans-serif'],
        semiBold: ['JakartaSans-SemiBold', 'sans-serif'],
        semiBoldItalic: ['JakartaSans-SemiBoldItalic', 'sans-serif'],
      }
    },
    colors: {
      primary: {
        50: '#FBFDFC',
        100: '#E6F4EC',
        200: '#C3E5D1',
        300: '#9FD6B5',
        400: '#74C490',
        500: '#4CAF50',
        600: '#3E9E45',
        700: '#2E7A37',
        800: '#225D2A',
        900: '#193F1E',
        950: '#0F2612',
      },
    }
  },
  plugins: [],
}