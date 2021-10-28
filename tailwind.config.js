module.exports = {
  purge: {
    enabled: false,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    },
    extend: {
      colors: {
        purple: {
          1: '#F6F4FF',
          2: '#D6D2E9',
          3: '#5843BE',
        },
        blue: {
          1: '#ECF6FF',
          2: '#D2E2F1',
          3: '#1A55AF',
        },
        red: {
          1: '#FFE7EA',
          2: '#E8CCCF',
          3: '#B46F78'
        },
        subtleGrey: {
          1: '#F6F7F8',
          2: '#A5AAB5',
          3: '#989BA1',
          4: '#787C84',
        },
        softGreen: {
          1: '#FFFBF0',
          2: '#EBE6D8',
          3: '#427A0A',
        },
        softYellow: '#FEECD7',
        strongOrange: '#FF865D'
      },
      spacing: {
        '10px': '10px',
        30: '30px',
        50: '50px',
      },
      fontSize: {
        28: '28px',
        22: '22px',
        18: '18px',
        13: '13px',
        10: '10px'
      },
      borderRadius: {
        '28px': '28px',
        '18px': '18px'
      },
      lineHeight: {
        '100px': '100px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
