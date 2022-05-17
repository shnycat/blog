import Link from "next/link";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";

export default function Nav() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/posts", name: "Posts" },
    { path: "https://github.com/shnycat", name: <SiGithub /> },
    {
      path: "https://t.me/infj_t_9w1_954_flev_rcoai_eii",
      name: <SiTelegram />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        {open ? <FaWindowClose /> : <FaBars />}
      </div>
      {open ? (
        <nav className="navbar" onClick={() => setOpen(!open)}>
          {links.map((item) => (
            <button>
              <Link className="link" href={item.path}>
                {item.name}
              </Link>
            </button>
          ))}
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
