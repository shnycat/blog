import Head from "next/head";
import { Nav, Footer } from "../components";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Nav />
      </header>

      <main>
        <div className="bismillah">بسم الله الرحمن الرحيم</div>
        <Component {...pageProps} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
