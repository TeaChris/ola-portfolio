import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'

import twitter from '@/assets/twitter.svg'
import facebook from '@/assets/facebook.svg'
import github from '@/assets/github.svg'

export default function Footer() {
  return (
    <footer className="w-full h-10 border-t border-slate-300 bg-body grid place-items-center bottom-0 left-0 fixed">
      <div className="mx-auto w-navContainerWidth h-full flex items-center justify-between">
        <div className="w-fit px-2 h-full flex items-center gap-0">
          <div className="px-2 grid place-items-center w-fit h-full border-r border-slate-400">
            <p className="text-xs first-letter:capitalize text-textSecondary">
              find me on:
            </p>
          </div>
          <div className="w-fit h-full border-r border-white grid place-items-center">
            <Link
              href="twitter.com"
              target="_blank"
              className={buttonVariants({ variant: 'ghost' })}
            >
              <Image src={twitter} alt="twitter" className="" />
            </Link>
          </div>
          <div className="w-fit h-full border-r border-white grid place-items-center">
            <Link
              href="facebook.com"
              target="_blank"
              className={buttonVariants({ variant: 'ghost' })}
            >
              <Image src={facebook} alt="twitter" className="" />
            </Link>
          </div>
        </div>

        {/* username */}
        <div className="w-fit h-full flex items-center gap-1 border-0 md:border-l border-white px-2">
          <p className="text-sm text-textSecondary">@username</p>
          <Link
            href="https://github.com/TeaChris"
            target="_blank"
            className={buttonVariants({ variant: 'ghost' })}
          >
            <Image src={github} alt="twitter" className="" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
