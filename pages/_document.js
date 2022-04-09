import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../app/theme'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />  
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}