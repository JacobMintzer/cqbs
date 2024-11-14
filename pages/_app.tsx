import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {Flex, MantineProvider} from '@mantine/core';
import { theme } from '../theme';
import HeaderMenu from '@/components/HeaderMenu/HeaderMenu';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Columbia Queer Business Club</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/cqbsFavicon.png" />
      </Head>
        <HeaderMenu />
        <Flex direction={"column"} gap={"xl"}>
            <Component {...pageProps} />
        </Flex>

        <SpeedInsights />
        <Analytics />
    </MantineProvider>
  );
}
