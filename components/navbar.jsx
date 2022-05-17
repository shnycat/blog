import Link from "next/link";
import {
  FaBars,
  FaWindowClose,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { useState } from "react";

export default function Nav() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/posts", name: "Posts" },
    { path: "https://github.com/shnycat", name: <FaGithub /> },
    {
      path: "https://t.me/infj_t_9w1_954_flev_rcoai_eii",
      name: <FaTelegramPlane />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaWindowClose /> : <FaBars />}
        </div>
        {open ? (
          <ul onClick={() => setOpen(!open)}>
            {links.map((item) => (
              <li>
                <Link href={item.path}>
                  <a className="link">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}
