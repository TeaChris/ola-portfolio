import { FC } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import { Checkbox } from './ui/checkbox'

interface ProjectAsideProps {}

const ProjectAside: FC<ProjectAsideProps> = ({}) => {
  return (
    <aside className="w-[16.9%] h-screen border-r border-zinc-400 flex flex-col gap-0 sticky top-0">
      <div className="w-full h-16 flex items-center justify-center pt-5 gap-2 border-b border-zinc-400">
        <BsCaretDownFill size={17} className="text-white" />
        <h6 className="text-white text-sm">projects</h6>
      </div>

      {/* checked */}
      <div className="w-full h-fit flex flex-col items-start gap-3 pl-4 mt-8">
        <div className="flex items-center space-x-2">
          <Checkbox checked />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            React
          </label>
        </div>

        {/* 2 */}
        <div className="flex items-center space-x-2">
          <Checkbox checked />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            Nextjs
          </label>
        </div>

        {/* 3 */}
        <div className="flex items-center space-x-2">
          <Checkbox checked />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            Prisma
          </label>
        </div>

        {/* 4 */}
        <div className="flex items-center space-x-2">
          <Checkbox checked />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            Mongodb
          </label>
        </div>

        {/* 5 */}
        <div className="flex items-center space-x-2">
          <Checkbox disabled />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            Bootstrap
          </label>
        </div>

        {/* 6 */}
        <div className="flex items-center space-x-2">
          <Checkbox checked />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            Tailwind
          </label>
        </div>

        {/* 7 */}
        <div className="flex items-center space-x-2">
          <Checkbox disabled />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            SASS
          </label>
        </div>

        {/* 8 */}
        <div className="flex items-center space-x-2">
          <Checkbox disabled />
          <label
            htmlFor="react"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
          >
            Vue
          </label>
        </div>
      </div>
    </aside>
  )
}

export default ProjectAside
