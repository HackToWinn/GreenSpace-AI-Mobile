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
    colors: {}
  },
  plugins: [],
}