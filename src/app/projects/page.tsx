import ProjectAside from '@/components/ProjectAside'
import ProjectHeading from '@/components/ProjectHeading'
import Projects from '@/components/Projects'
import ProjectMobile from '@/components/ProjectMobile'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-screen h-screen lg:overflow-hidden">
      <div className="hidden lg:flex w-full h-fit items-center gap-0 relative mt-3">
        <ProjectAside />
        <Projects />
      </div>
      {/* mobile */}
      <div className="block lg:hidden w-full h-fit">
        <ProjectHeading />
        <ProjectMobile/>
      </div>
    </div>
  )
}

export default page
