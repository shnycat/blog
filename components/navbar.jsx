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
      <div
        className={`
          fixed top-3 left-3 z-[9999] text-2xl p-2
          rounded-[30%] bg-[#00000010] backdrop-blur-sm 
          border-[#ffffff10] border-2 block md:hidden`}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaWindowClose /> : <FaBars />}
      </div>
      <nav
        className={`
          flex flex-col md:flex-row fixed h-full md:h-14
          w-full items-center justify-center
          space-y-8 text-2xl backdrop-blur-sm bg-[#00000099] ${
            open ? "block" : "hidden md:block"
          }`}
      >
        {links.map((item) => (
          <Link href={item.path}>
            <button
              type="button"
              className="p-1 w-[70%] font-bold rounded-md border-[#ffffff10] border-2 flex justify-center"
            >
              {item.name}
            </button>
          </Link>
        ))}
      </nav>
    </>
  );
}
