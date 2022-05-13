import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
      poppins: "'Poppins', sans-serif",
      dmSans: "'DM Sans', sans-serif",
      bebas: "'Bebas Neue', cursive",
    },
    colors: {
      primary: '#5C4AC7',
      secondary: '#212529',
      red: 'red',
      hiContrast: 'black',
      loContrast: 'white',
      darkBg: '#06092B',
      lightBg: 'white',
      purple100: '#E5DBFF',
      purple400: '#9C7DE0',
      title: '#061800',
      subtitle: '#384633'
    },
    fontSizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    },
  },
  media: {
    mobile: '(min-width: 640px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
  }
});