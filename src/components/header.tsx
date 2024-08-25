"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "All Events",
    path: "/events/all"
  }
]

const Header = () => {

  const activePathName =  usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="flex gap-x-6 text-sm sm:text-md h-full">
      <ul className="flex h-full gap-4 items-center">
          {routes.map((route, i) => (
            <li className="relative bottom-0 h-full flex items-center" key={i}>
              <Link
                key={route.path}
                href={route.path}
                className={cn("hover:text-white/90 transition  ", {
                  "text-white": activePathName === route.path,
                  "text-white/50": activePathName !== route.path,
                })}
              >
                {route.name}
              </Link>
              {activePathName === route.path && (
                <motion.span
                  layoutId="header-active-link"
                  className="w-full absolute h-1 bottom-0 left-0 bg-accent"
                />
              )}
            </li>
          ))}
        </ul>


      </nav>
    </header>
  );
};

export default Header;
