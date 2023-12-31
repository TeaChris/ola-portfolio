'use client'

import { FC, useState } from 'react'

import AboutSkills from '@/app/(about)/_components/AboutSkills'
import PersonalInfo from '@/app/(about)/_components/PersonalInfo'
import AboutMobile from '@//app/(about)/_components/AboutMobile'
import Image from 'next/image'
import { PocketKnife } from 'lucide-react'

const icons = ['/svg/icon1.svg', '/svg/icon2.svg', '/svg/icon3.svg']

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [active, setActive] = useState<number | null>(0)

  const handleIconClick = (index: number) => {
    setActive(index)
  }

  return (
    <main className="w-full h-fit lg:h-screen overflow-y-scroll lg:overflow-hidden">
      <div className="w-full lg:flex items-start gap-0 h-full hidden">
        <div className="w-[5%] h-full border-r-2 border-textMuted2 flex flex-col pt-24 items-center gap-0">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`w-full h-16 flex items-center justify-center cursor-pointer ${
                active === index ? 'border-r-2 border-textOrange' : 'border-0'
              }`}
              onClick={() => handleIconClick(index)}
            >
              <Image
                src={icon}
                alt="icon"
                width={20}
                height={20}
                className="w-8 h-8 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-[70%] h-full border-r-2 border-textMuted2">
          {active === 0 && <PersonalInfo />}
        </div>

        <div className="w-[25%] h-full flex flex-col items-start gap-0 pt-5">
          <div className="w-full h-[10%] border-b-2 flex items-center justify-start pt-7 pl-4 border-textMuted2">
            <div className="w-fit h-fit flex items-center gap-2">
              <PocketKnife className="w-5 h-5 text-white" />
              <h3 className="text-white text-sm">skills</h3>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-full flex flex-col items-start lg:hidden">
        <AboutMobile />
        <AboutSkills />
      </div>
    </main>
  )
}

export default Page
