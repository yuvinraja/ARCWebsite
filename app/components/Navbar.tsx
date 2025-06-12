"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Logo from "./Logo"; // Assuming Logo component is in the same directory

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Emerging Tech",
    link: "#",
    children: [
      {
        label: "Drones",
        link: "/experiments",
      },
      {
        label: "Ground Vehicles",
        link: "/experiments",
      },
      {
        label: "Autonomous Systems",
        link: "/experiments",
      },
    ],
  },
  {
    label: "Projects",
    link: "#",
    children: [
      {
        label: "Drones",
        link: "/projects",
      },
    ],
  },
  {
    label: "Company",
    link: "#",
    children: [
      {
        label: "About",
        link: "/about",
      },
      {
        label: "Team",
        link: "/team",
      },
      {
        label: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    label: "Products",
    link: "#",
  },
  {
    label: "Careers",
    link: "#",
  },
  {
    label: "Blog",
    link: "#",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);

  return (
    <div className="relative z-[100] w-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
      <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
        <section ref={animationParent} className="flex items-center gap-10">
          <Logo />
          {isSideMenuOpen && (
            <MobileNav closeSideMenu={() => setSideMenue(false)} />
          )}
          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((item, i) => (
              <NavItem key={i} {...item} />
            ))}
          </div>
        </section>

        {/* Login and register in desktop view */}
        {/* <section className="hidden md:flex items-center gap-8">
          <button className="h-fit text-purple-100 transition-all hover:text-white">Login</button>
          <button className="h-fit rounded-xl border-2 border-purple-200 bg-white/10 backdrop-blur-sm px-4 py-2 text-white transition-all hover:bg-white/20 hover:border-white">
            Register
          </button>
        </section> */}

        <FiMenu
          onClick={() => setSideMenue(true)}
          className="cursor-pointer text-4xl md:hidden text-white"
        />
      </div>
    </div>
  );
}

function NavItem({ label, link, children }: NavItem) {
  return (
    <div className="relative group px-2 py-3 transition-all">
      <Link href={link ?? "#"}>
        <p className="flex cursor-pointer items-center gap-2 font-bold text-base text-white group-hover:text-white">
          <span>{label}</span>
          {children && (
            <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
          )}
        </p>
      </Link>

      {children && (
        <div className="absolute z-[200] right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-white/10 backdrop-blur py-3 shadow-lg transition-all group-hover:flex">
          {children.map((child, i) => (
            <div key={i} className="w-full">
              <Link
                href={child.link ?? "#"}
                className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-white hover:text-yellow-200"
              >
                <span className="whitespace-nowrap pl-3">{child.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSideMenu();
    }
  };

  return (
    <div
      className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden"
      onClick={handleOverlayClick}
    >
      <div className="h-full w-[65%] bg-gradient-to-b from-purple-600 to-pink-600 px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-white"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all mt-6">
          {navItems.map((item, i) => (
            <MobileNavItem key={i} {...item} closeSideMenu={closeSideMenu} />
          ))}
        </div>

        {/* Uncomment if you want to add login/register buttons in mobile view */}
        {/* <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-purple-100 transition-all hover:text-white">Login</button>
          <button className="w-full max-w-[200px] rounded-xl border-2 border-purple-200 bg-white/10 backdrop-blur-sm px-4 py-2 text-white transition-all hover:bg-white/20 hover:border-white">
            Register
          </button>
        </section> */}
      </div>
    </div>
  );
}

function MobileNavItem({
  label,
  link,
  children,
  closeSideMenu,
}: NavItem & { closeSideMenu: () => void }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  return (
    <div ref={animationParent} className="relative px-2 py-3 transition-all">
      <div
        onClick={() => setItem(!isItemOpen)}
        className="flex cursor-pointer items-center gap-2 font-bold text-base text-white hover:text-white"
      >
        <Link href={link ?? "#"} onClick={children ? undefined : closeSideMenu}>
          <span>{label}</span>
        </Link>
        {children && (
          <IoIosArrowDown
            className={`text-xs transition-all text-purple-100 ${
              isItemOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white/10 backdrop-blur-sm py-3 transition-all flex mt-2">
          {children.map((child, i) => (
            <div key={i} className="w-full">
              <Link
                href={child.link ?? "#"}
                className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-white hover:text-white hover:bg-white/10 rounded"
                onClick={closeSideMenu}
              >
                <span className="whitespace-nowrap pl-3">{child.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
