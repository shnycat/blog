import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shnycat - Home</title>
        <link rel="stylesheet" href="/index.css" />
      </Head>
      <h2 className="bism">بسم الله الرحمن الحيم</h2>
      <main>
        <img src="/profile.png" width="300px" />
        <div>
          <h1>Hi! I Am Afif,</h1>
          <h3>net-taught full-stack {"{}"} developer?.</h3>
          <div>
            <div className={`card`}>
              <h2>About Me?</h2>
              <p>
                Two years of <strike>learning at home</strike> watching a lot of
                Japanese cartoons during COVID quarantine makes me realise that
                I'm a really useless person.
              </p>
              <p>
                Then, in order to overcome it I started trying to develop some
                skills to take back my dignity.
              </p>
              <p>
                My Schizoid tells me that I should get a job which requires less
                or zero human interactivity. So I concluded that remote jobs are
                best match for me.
              </p>
            </div>
            <div className={`card`}>
              <h2>Skills.</h2>
              <p>
                I can speak in some programming languages such as JavaScript,
                Python, C/C++. I understand Object Oriented Programming. I use
                Git and Github to track and maintain my projects.
              </p>
              <p>
                I use Linux operating system as my main OS. So I understand a
                little bit of Linux administration. I am comfortable in
                command-line interface and fluent in Bash scripting language. I
                use Artix btw :).
              </p>
              <p>
                If needed, I can learn other languages too. I can work in a
                learning-at-work job. Please consider to hire me.
              </p>
              <p>Good people... Please hire me T_T</p>
            </div>
            <div className={`card`}>
              <h2>Projects.</h2>
              <p>
                None. Because of my lack of motivation, I mostly abandoned my
                started project and start another one without even finishing any
                of them. teehee ;p
              </p>
              <p>
                But... I'm certain if it is a client's order I would surely make
                it finished! <i>Well, of course it is. lol.</i>
              </p>
            </div>
            <div className={`card`}>
              <h2>Just FYI.</h2>
              <p>
                I made this web page using Next.js inside{" "}
                <a href="https://termux.com">Termux</a> android terminal
                emulator with Neovim as my code editor.
              </p>
            </div>
            <br />
            <p className='end'>
              That's it. Thank you very muccho for reading and sorry for my bad
              grammar!
            </p>
            <br />
            <img src="/test.gif" alt="gif" width="100%" />
          </div>
        </div>
        <span className="line"></span>
        <footer>Sholahuddin Afif - 2022</footer>
      </main>
    </>
  );
}
