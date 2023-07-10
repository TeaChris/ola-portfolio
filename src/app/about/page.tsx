import { FC } from 'react'

import About from '@/components/About'
import AboutIcon from '@/components/AboutIcon'
import AboutMobile from '@/components/AboutMobile'
import AboutSkills from '@/components/AboutSkills'
import CodeSnippet from '@/components/CodeSnippet'
import PersonalInfo from '@/components/PersonalInfo'

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
