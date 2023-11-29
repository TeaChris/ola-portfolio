'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'

interface NavbarProps {}

const nav = [
  {
    label: '_hello',
    href: '/',
  },
  {
    label: '_about-me',
    href: '/about',
  },
  {
    label: '_projects',
    href: '/projects',
  },
]

const Navbar: FC<NavbarProps> = ({}) => {
  const pathname = usePathname()

  return (
    <nav className="w-full h-[10%] lg:h-[6%] flex items-center justify-center top-0 left-0 fixed bg-body z-20 border-0 lg:border-b border-textMuted shadow-sm shadow-black lg:shadow-none">
      <div className="w-full flex items-start justify-between h-full px-2 lg:px-0">
        <div className="lg:w-[40%] h-full flex items-center">
          <div className="w-fit lg:w-[25%] h-full border-0 lg:border-r lg:border-textMuted flex items-center justify-center">
            <h3 className="text-textSecondary text-2xl sm:text-xl font-bold">
              Bermuda
            </h3>
          </div>
          <div className="hidden w-[75%] h-full border-r border-textMuted lg:flex">
            {nav.map((item) => (
              <div
                key={item.label}
                className={`w-[33.3%] h-full flex items-center justify-center border-r border-textMuted ${
                  pathname === item.href ? 'border-b-2 border-textOrange' : ''
                }`}
              >
                <Link href={item.href} className="text-base text-textMuted">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`hidden lg:flex ${
            pathname === '/contact' ? 'border-b-2 border-textOrange' : ''
          } w-[10%] h-full border-l border-textMuted flex items-center justify-center`}
        >
          <Link href="/contact" className="text-base text-textMuted">
            _contact
          </Link>
        </div>
        <div className="lg:hidden md:block w-10 h-full items-center justify-center">
          <Sheet>
            <SheetTrigger className="h-full w-10 flex items-center justify-center">
              <Menu className="h-6 w-6 flex-shrink-0 text-textMuted" />
            </SheetTrigger>
            {/* ts-ignore */}
            <SheetContent className="flex items-center justify-center">
              <div className="w-fit h-fit flex flex-col items-center gap-8">
                {nav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-2xl text-textMuted"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href={'/contact'} className="text-2xl text-textMuted">
                  _contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
