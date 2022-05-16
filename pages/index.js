import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Shnycat - Home</title>
      </Head>
      <main className={styles.main}>
        <img src="/profile.png" width="300px" />
        <div>
          <h1>Hi, I Am Afif,</h1>
          <h3>Net-taught Full-stack Developer.</h3>
          <p>
            Read more about me <Link href={`#`}>here</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
