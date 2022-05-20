import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
