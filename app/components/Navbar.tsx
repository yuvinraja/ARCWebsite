"use client"

import { useState } from "react"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import Logo from "./Logo"

type NavItem = {
  label: string
  link?: string
  children?: NavItem[]
}

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
    ],
  },
  {
    label: "Company",
    link: "#",
    children: [
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "Products",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
]

export default function Navbar() {
  const [animationParent] = useAutoAnimate()
  const [isSideMenuOpen, setSideMenue] = useState(false)

  return (
    <div className="relative z-[100] mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
      <section ref={animationParent} className="flex items-center gap-10">
        <Logo />
        {isSideMenuOpen && <MobileNav closeSideMenu={() => setSideMenue(false)} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((item, i) => (
            <NavItem key={i} {...item} />
          ))}
        </div>
      </section>

      <section className="hidden md:flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">Login</button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>

      <FiMenu onClick={() => setSideMenue(true)} className="cursor-pointer text-4xl md:hidden" />
    </div>
  )
}

function NavItem({ label, link, children }: NavItem) {
  return (
    <div className="relative group px-2 py-3 transition-all">
      <Link href={link ?? "#"}>
        <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
          <span>{label}</span>
          {children && <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />}
        </p>
      </Link>

      {children && (
        <div className="absolute z-[200] right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-lg transition-all group-hover:flex">
          {children.map((child, i) => (
            <div key={i} className="w-full">
              <Link
                href={child.link ?? "#"}
                className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
              >
                <span className="whitespace-nowrap pl-3">{child.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((item, i) => (
            <MobileNavItem key={i} {...item} />
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">Login</button>
          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  )
}

function MobileNavItem({ label, link, children }: NavItem) {
  const [animationParent] = useAutoAnimate()
  const [isItemOpen, setItem] = useState(false)

  return (
    <div ref={animationParent} className="relative px-2 py-3 transition-all">
      <div
        onClick={() => setItem(!isItemOpen)}
        className="flex cursor-pointer items-center gap-2 text-neutral-400 hover:text-black"
      >
        <Link href={link ?? "#"}>
          <span>{label}</span>
        </Link>
        {children && <IoIosArrowDown className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`} />}
      </div>

      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {children.map((child, i) => (
            <div key={i} className="w-full">
              <Link
                href={child.link ?? "#"}
                className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
              >
                <span className="whitespace-nowrap pl-3">{child.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

