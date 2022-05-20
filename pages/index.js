import Head from "next/head";
import Link from "next/link";
import {
  SiArtixlinux,
  SiCplusplus,
  SiGnubash,
  SiJavascript,
  SiLinux,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shnycat - Home</title>
        <link rel="stylesheet" href="/index.css" />
      </Head>

      <div>
        <img src="/profile.png" width="300px" />
        <h1>Hi! I Am Afif,</h1>
        <h3>
          <Link href="/nettaught">net-taught</Link> full-stack web developer?
        </h3>
        <div className="cards">
          <div className="card">
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
              Python, and middle level languages like C/C++ and Rust. I
              understand Object Oriented Programming. I use Git and Github to
              track and maintain my projects.
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
            <h3>skills:</h3>
            <div className="skill-icons">
              <span>
                <SiHtml5 />
              </span>
              <span>
                <SiCss3 />
              </span>
              <span>
                <SiJavascript />
              </span>
              <span>
                <SiReact />
              </span>
              <span>
                <SiNextdotjs />
              </span>
              <span>
                <SiPython />
              </span>
              <span>
                <SiCplusplus />
              </span>
              <span>
                <SiGnubash />
              </span>
              <span>
                <SiLinux />
              </span>
              <span>
                <SiArtixlinux />
              </span>
            </div>
          </div>
          <div className={`card`}>
            <h2>Projects.</h2>
            <p>
              None. Because of my lack of motivation, I mostly abandoned my
              started project and start another one without even finishing any
              of them. teehee ;p
            </p>
            <p>
              But... I feel like I'm certain if it is a client's order I would
              surely make it finished! <i>Well, of course it is. lol.</i>
            </p>
          </div>
          <div className={`card`}>
            <h2>Just FYI.</h2>
            <p>
              I made this web page using Next.js and vanilla CSS3 inside{" "}
              <Link href="https://termux.com">Termux</Link> (android terminal
              emulator) with Neovim as my code editor.
            </p>
          </div>
          <br />
          <p className="end">
            That's it. Thank you very muccho for reading and sorry for my bad
            grammar!
          </p>
          <br />
        </div>
        <div className="images">
          <img src="/test.gif" alt="gif" width="100%" />
          <img src="/images/_app.jpg" alt="jpeg" width="100%" />
          <img src="/images/css.jpg" alt="jpeg" width="100%" />
        </div>
      </div>
    </>
  );
}
