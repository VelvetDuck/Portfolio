import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {ColorModeScript} from '@chakra-ui/color-mode'
import NavbarComponent from './component/NavbarComponent';

import theme from './theme';



export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
        <NavbarComponent></NavbarComponent>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}
