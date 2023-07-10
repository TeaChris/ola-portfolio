import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import img1 from '@/assets/icon1.svg'
import img2 from '@/assets/icon2.svg'
import img3 from '@/assets/icon3.svg'
import { buttonVariants } from './ui/button'

interface AboutIconProps {}

const AboutIcon: FC<AboutIconProps> = ({}) => {
  return (
    <aside className="hidden h-full w-[4%] border-r border-zinc-400 lg:flex flex-col items-center justify-start pt-8">
      <div className="w-full h-fit grid place-items-center">
        <Link href="/about" className={buttonVariants({ variant: 'ghost' })}>
          <Image src={img1} alt="twitter" className="" />
        </Link>
      </div>
      <div className="w-full h-fit grid place-items-center">
        <Link href="/about" className={buttonVariants({ variant: 'ghost' })}>
          <Image src={img2} alt="twitter" className="" />
        </Link>
      </div>
      <div className="w-full h-fit grid place-items-center">
        <Link href="/about" className={buttonVariants({ variant: 'ghost' })}>
          <Image src={img3} alt="twitter" className="" />
        </Link>
      </div>
    </aside>
  )
}

export default AboutIcon
