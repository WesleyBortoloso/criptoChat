import GlobalStyle from "../components/GlobalStyle"
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cripto Chat 💰</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}