'use client'

import { FC } from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Separator } from './ui/separator'

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  return (
    <div className="w-full h-full flex justify-between items-end pl-2">
      <Link href="/" className="text-textMuted">
        _hello
      </Link>
      <Separator orientation="vertical" />
      <Link href="/about" className="text-textMuted">
        _about
      </Link>
      <Separator orientation="vertical" />
      <Link href="/projects" className="text-textMuted">
        _projects
      </Link>
      <Separator orientation="vertical" />
      <Link href="/contact" className="text-textMuted">
        _contact
      </Link>
      <Separator orientation="vertical" />
    </div>
  )
}

export default Nav
