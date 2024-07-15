// src/styles/theme.jsx
const theme = {
    borderRadius: '20px',
  
    colors: {
      primary: '#0F2A55',
      hover: '#AF0909',
      secondary: '#F9A198',
      accent: '#E54525',
      background: '#F7F7F7',
      text: '#05142B',
      light: '#FFFFF3',
      blue: '#9fcfff'
    },
  
    fontSizes: {
      small: '1rem',
      sm: '1.5rem',
      medium: '1.8rem',
      large: '2.3rem',
      xlarge: '3.1rem',
    },

    fontWeight:{
    small: '400',
      medium: '600',
      large: '700',
      xlarge: '900',
    },
  
    spacing: {
      xsmall: '4px',
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
    },
  
    /* breakpoints: {
      mobile: 'only screen and (max-width: 600px)',
      tablet: 'only screen and (max-width: 768px)',
      desktop: 'only screen and (min-width: 769px)',
    }, */
    shadows: {
      small: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
      medium: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
      large: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
    },
  };
  
  export default theme;
  