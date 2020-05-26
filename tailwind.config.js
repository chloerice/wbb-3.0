module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#474747',
        yellow: '#F4CF64',
        white: '#FFF',
        black: '#000',

        brown: {
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
        base: '14px',
        15: '15px',
        16: '16px',
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
        '30px': '30px'
      }
    },

    fontFamily: {
      jura: ['Jura', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'odd']
  },
  plugins: [],
}
