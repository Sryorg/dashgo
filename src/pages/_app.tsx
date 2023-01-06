import type { AppProps } from 'next/app'
import { ChakraProvider } from  '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from '../styles/theme'

import { QueryClientProvider } from 'react-query'
import { SidebarDrawerProiver } from '../contexts/SideBarDrawerContext'
import { makeServer } from '../services/mirage/inderx'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}



export default function App({ Component, pageProps }: AppProps) {
  return (

    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProiver>
          <Component {...pageProps} />
        </SidebarDrawerProiver>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
