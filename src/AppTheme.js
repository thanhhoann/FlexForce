import { extendTheme } from '@chakra-ui/react';
import {
  alto,
  citrineWhite,
  dogerBlue,
  fruitSalad,
  hintOfGreen,
  mineShaft,
  periwinkle,
  pippin,
  pizazz,
  poolWater,
  sunsetOrange,
  zumthor,
} from './utils/colors';

const AppTheme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  colors: {
    light: {
      primary: '#FFFFFF',
      background: '#F5F5F5',
      orange: '#F8503C'
    },
    dark: {
      primary: '#151b2b',
      background: '#1D2436',
    },
  },
  textStyles: {
    largeTitle: {
      fontSize: '3xl', // 30px
      fontWeight: 600,
    },
    mediumTitle: {
      fontSize: 'lg', // 18px
      fontWeight: 600,
    },
    smallTitle: {
      fontSize: 'md', // 16px
      fontWeight: 600,
    },
    subLargeTitle: {
      fontSize: 'lg',
      fontWeight: 500,
    },
    subMediumTitle: {
      fontSize: 'md',
      fontWeight: 500,
    },
    subSmallTitle: {
      fontSize: 'sm',
      fontWeight: 500,
    },
  },
  styles: {
    global: {
      'html, body': {
        fontWeight: 400,
        color: mineShaft,
      },
      '::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'rgba(55, 125, 255, 0.1)',
      },
      p: {
        fontSize: 'sm',
        margin: 0,
        padding: 0,
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
    Button: {
      baseStyle: {
        outLine: 'none',
        borderRadius: '1rem',
        minHeight: '38px',
        width: '100%',
        fontWeight: '600',
        fontSize: 'md',
        _focus: { boxShadow: 'none' },
      },
      sizes: {
        sm: {
          h: '8',
        },
        md: {
          h: '8',
        },
      },
      variants: {
        primary: {
          bg: 'light.primary',
          color: 'white',
          _hover: {
            bg: 'blue',
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        borderRadius: '2xl',
      },
    },
  },
});

export default AppTheme;
