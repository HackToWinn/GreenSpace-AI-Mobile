/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        JakartaSans: ['JakartaSans', 'sans-serif'],
        JakartaSansBold: ['JakartaSans-Bold', 'sans-serif'],
        JakartaSansBoldItalic: ['JakartaSans-BoldItalic', 'sans-serif'],
        JakartaSansExtraBold: ['JakartaSans-ExtraBold'],
        JakartaSansExtraBoldItalic: ['JakartaSans-ExtraBoldItalic', 'sans-serif'],
        JakartaSansExtraLight: ['JakartaSans-ExtraLight', 'sans-serif'],
        JakartaSansExtraLightItalic: ['JakartaSans-ExtraLightItalic', 'sans-serif'],
        JakartaSansItalic: ['JakartaSans-Italic', 'sans-serif'],
        JakartaSansLight: ['JakartaSans-Light', 'sans-serif'],
        JakartaSansLightItalic: ['JakartaSans-LightItalic', 'sans-serif'],
        JakartaSansMedium: ['JakartaSans-Medium', 'sans-serif'],
        JakartaSansMediumItalic: ['JakartaSans-MediumItalic', 'sans-serif'],
        JakartaSansRegular: ['JakartaSans-Regular', 'sans-serif'],
        JakartaSansSemiBold: ['JakartaSans-SemiBold', 'sans-serif'],
        JakartaSansSemiBoldItalic: ['JakartaSans-SemiBoldItalic', 'sans-serif'],
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