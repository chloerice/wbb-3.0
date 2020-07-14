module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        yellow: {
          300: '#F4CF64',
          600: '#E2AF00',
          900: '#987100',
        },
        black: {
          100: '#5c5c5d93',
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

      height: {
        '100vh': '100vh'
      },

      width: {
        50: '50px',
        100: '100px',
        150: '150px',
        p20: '20%',
        p30: '30%',
        p90: '90%',
        '45vw': '45vw'
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
        '3r': '3rem',
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
        '10r': '10rem',
        '30r': '30rem',
        '5pc': '5%',
        '10pc': '10%',
        '15pc': '15%',
        '20pc': '20%',
        '25pc': '25%',
        '33pc': '33%',
        '50pc': '50%',
        '75pc': '75%',
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
        xs: '100px',
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
