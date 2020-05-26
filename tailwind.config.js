module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        yellow: '#F4CF64',
        white: '#FFF',
        black: {
          300: '#474747',
          600: '#232323',
          900: '#000',
        },

        orange: {
          100: '#B68D56',
          200: '#886542',
          300: '#442C13',
          400: '#392110',
          500: '#2D1709',
          600: '#110903'
        }
      },

      width: {
        p30: '30%',
        p40: '40%',
        p50: '50%',
      },

      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        base: '16px',
        18: '18px',
        24: '24px',
      },

      spacing: {
        '0': '0',
        '1': '.25rem',
        '2': '.5rem',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.25rem',
        '8': '2rem',
        '10': '2.25rem',
        '12': '2.5rem',
        '14': '2.75rem',
        '3r': '3rem',
        '4r': '4rem',
        '5r': '5rem',
        '6r': '6rem',
        '7r': '7rem',
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '20px': '20px',
        '24px': '24px',
        '26px': '26px',
        '100px': '100px',
        '150px': '150px',
        '200px': '200px',
        '300px': '300px',
      },

      maxWidth: {
        sm: '400px',
        narrow: '550px',
        med: '600px',
        wide: '800px'
      },
    },

    fontFamily: {
      jura: ['Jura', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      arial: ['Arial', 'sans-serif'],
    },

    boxShadow: {
      focus: 'inset 0px 0px 0px 2px rgba(82,184,191,0.8)',
      dark: '0px 0px 0px 1px rgba(0,0,0,0.2)',
      float: '0px 22px 60px rgba(0, 0, 0, 0.2)',
      soft: '0px 0px 10px rgba(0, 0, 0, 0.15)',
      img: '0px 5px 10px rgba(0, 0, 0, 0.1)',
      imgSoft: '0px 1px 2px rgba(0, 0, 0, 0.15)',
      selected: '0px 5px 10px rgba(0, 0, 0, 0.1)'
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'odd']
  },
  plugins: [],
}
