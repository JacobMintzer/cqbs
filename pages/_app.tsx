import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import HeaderMenu from '@/components/HeaderMenu/HeaderMenu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Columbia Queer Business Club</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
        <HeaderMenu />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
