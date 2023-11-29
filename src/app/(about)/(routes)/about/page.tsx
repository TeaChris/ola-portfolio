import { FC } from 'react'

import About from '@/app/(about)/_components/About'
import AboutIcon from '@/app/(about)/_components/AboutIcon'
import AboutSkills from '@/app/(about)/_components/AboutSkills'
import CodeSnippet from '@/app/(about)/_components/CodeSnippet'
import PersonalInfo from '@/app/(about)/_components/PersonalInfo'
import AboutMobile from '@//app/(about)/_components/AboutMobile'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="w-screen h-fit lg:h-screen overflow-y-scroll lg:overflow-hidden">
      <div className="hidden w-full h-full lg:flex items-center gap-0 relative mt-3">
        <AboutIcon />
        <PersonalInfo />
        <About />
        <CodeSnippet />
      </div>
      <div className=" w-full h-full flex flex-col items-start lg:hidden">
        <AboutMobile />
        <AboutSkills />
      </div>
    </main>
  )
}

export default page
