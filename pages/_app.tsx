import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Open Sans, sans serif',
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}