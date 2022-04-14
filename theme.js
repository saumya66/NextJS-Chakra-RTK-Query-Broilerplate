import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

//custom styling
const styles = {
    global: props => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.200', '#141214')(props),
      },
    }),
  };
  
const theme = extendTheme({ config ,styles})

export default theme