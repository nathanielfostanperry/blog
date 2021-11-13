module.exports = {
  purge: {
    content: ['./**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray:{
        100: '#f7fafc',
        400: '#7c888f',
        500: '#707070',
        600: '#5f5d5d',
        700: '#484646',
        900: '#1a202c',
      },
      tan: {
       100: '#f1efed',
       200: '#E0DBD6',
       300: '#cec7c1',
       400: '#a7a09a',
       500: '#908984',
      },
      green: {
       100: '#edf1f0',
       600: '#778e84',
       700: '#4f6f61',
       800: '#264537',
       900: '#092217',
      },
      red: '#B74429',
      blue: '#294FB7',
    },

  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}
