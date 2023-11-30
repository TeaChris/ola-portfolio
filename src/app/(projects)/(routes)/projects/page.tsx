import ProjectHeading from '@/components/ProjectHeading'
import Projects from '@/components/Projects'
import ProjectMobile from '@/components/ProjectMobile'
import { FC } from 'react'
import { ListFilter } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="w-full h-fit lg:h-screen overflow-y-scroll lg:overflow-hidden">
      <div className="w-full flex items-start gap-0 h-full">
        <div className="w-[15%] h-full border-r-2 border-textMuted2 flex flex-col pt-5 items-center gap-0">
          <div className="w-full h-[10%] border-b-2 border-textMuted2 flex items-center justify-start pl-4 pt-7">
            <div className="w-fit h-fit flex items-center gap-2">
              <ListFilter className="w-5 h-5 text-white" />
              <h3 className="text-white text-sm">filter</h3>
            </div>
          </div>

          {/* stack list */}
          <div className="w-full h-fit flex flex-col items-start gap-4 p-4">
            <div className="w-full h-fit flex items-center gap-3">
              <Checkbox className="w-4 h-4" />
              <h4 className="text-textMuted text-base">html & css</h4>
            </div>
            <div className="w-full h-fit flex items-center gap-3">
              <Checkbox className="w-4 h-4" />
              <h4 className="text-textMuted text-base">javascript</h4>
            </div>
            <div className="w-full h-fit flex items-center gap-3">
              <Checkbox className="w-4 h-4" />
              <h4 className="text-textMuted text-base">react</h4>
            </div>
            <div className="w-full h-fit flex items-center gap-3">
              <Checkbox className="w-4 h-4" />
              <h4 className="text-textMuted text-base">next.js</h4>
            </div>
            <div className="w-full h-fit flex items-center gap-3">
              <Checkbox className="w-4 h-4" />
              <h4 className="text-textMuted text-base">full-stack</h4>
            </div>
          </div>
        </div>

        <Projects />
      </div>
      {/* mobile */}
      <div className="block lg:hidden w-full h-fit">
        <ProjectHeading />
        <ProjectMobile />
      </div>
    </main>
  )
}

export default page
