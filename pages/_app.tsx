import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {ColorModeScript} from '@chakra-ui/color-mode'
import NavbarComponent from './component/NavbarComponent';



export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider>
        <NavbarComponent></NavbarComponent>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}
