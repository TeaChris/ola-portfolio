import { FC } from 'react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { Separator } from './ui/separator'

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = ({}) => {
  return (
    <div className="w-full h-full flex flex-col item-start gap-0">
      <div className="w-full h-16 bg-transparent pl-5 pt-6">
        <Link href="/" className="text-lg font-medium text-white w-full h-full">
          _hello
        </Link>
      </div>
      <Separator />
      <div className="w-full h-16 bg-transparent pl-5 pt-6">
        <Link
          href="/about"
          className="text-lg font-medium text-white w-full h-full"
        >
          _about-me
        </Link>
      </div>
      <Separator />
      <div className="w-full h-16 bg-transparent pl-5 pt-6">
        <Link
          href="/projects"
          className="text-lg font-medium text-white w-full h-full"
        >
          _projects
        </Link>
      </div>
      <Separator />
      <div className="w-full h-16 bg-transparent pl-5 pt-6">
        <Link
          href="/contact"
          className="text-lg font-medium text-white w-full h-full"
        >
          _contact
        </Link>
      </div>
      <Separator />
      <div className="w-full h-16 bg-transparent pl-5 pt-6">
        <Link
          href="/ola.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-white w-full h-full"
        >
          _resume
        </Link>
      </div>
      <Separator />
    </div>
  )
}

export default MobileNav
