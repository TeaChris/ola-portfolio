'use client'

import { FC, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import { Button } from './ui/button'
import menu from '@/assets/menu.svg'
import close from '@/assets/close.svg'
import MobileNav from './MobileNav'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full h-14 lg:h-10 grid place-items-center top-0 left-0 fixed bg-body z-20 border-0 lg:border-b border-textMuted shadow-sm shadow-black lg:shadow-none">
      <div className="mx-auto w-navContainerWidth h-full flex justify-between items-center relative">
        <div className="w-fit pr-3 lg:w-[39rem] sm:max-w-3xl h-full flex items-center gap-0 pl-2">
          <div className="w-fit pr-4 lg:pr-0 lg:w-[40%] h-full border-0 lg:border-r border-textMuted flex items-center justify-start">
            <h6 className="text-textSecondary text-lg font-bold">Bermuda</h6>
          </div>
          <div className="hidden w-[75%] h-full lg:grid place-items-center">
            <Nav />
          </div>
        </div>

        {/* resume */}
        <div className="hidden w-32 h-full lg:grid place-items-center border-l border-white px-2">
          <Link
            href="/ola.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted"
          >
            _resume
          </Link>
        </div>

        {/*  */}
        <div className="block lg:hidden w-fit pr-2">
          <Button variant="ghost" onClick={handleOpen}>
            {isOpen ? (
              <Image src={close} alt="menu" className="" />
            ) : (
              <Image src={menu} alt="close" className="" />
            )}
          </Button>
        </div>

        <div
          className={`w-full h-[35rem] bg-body lg:hidden ${
            isOpen ? 'top-16' : 'top-[-700px]'
          } transition-all duration-500 ease-in-out left-0 absolute`}
        >
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
