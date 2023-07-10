import { FC } from 'react'
import Image from 'next/image'
import { BsCaretDownFill } from 'react-icons/bs'
import { Checkbox } from './ui/checkbox'
import react from '@/assets/react.svg'
import next from '@/assets/next.svg'
import sql from '@/assets/Vector.svg'
import ts from '@/assets/ts.svg'
import js from '@/assets/js.svg'

interface ProjectHeadingProps {}

const ProjectHeading: FC<ProjectHeadingProps> = ({}) => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-5">
      <div className="w-full h-fit flex flex-col items-start gap-4 mt-20">
        <div className="w-full px-3">
          <h6 className="text-lg text-white">_my-projects</h6>
        </div>
        <div className="w-full h-fit flex flex-col items-start gap-2">
          <div className="w-full h-12 bg-textMuted2 flex gap-3 items-center px-3">
            <BsCaretDownFill size={17} className="text-white" />
            <h6 className="text-white text-lg">my-major-stack</h6>
          </div>
        </div>

        <div className="w-full flex flex-col h-fit items-start gap-4">
          <div className="w-full h-fit flex gap-4 items-center pl-16">
            <Checkbox checked />
            <div className="flex items-center gap-2">
              <Image
                src={react}
                alt="image"
                className="w-6 aspect-square object-cover"
              />
              <label
                htmlFor="react"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
              >
                React
              </label>
            </div>
          </div>

          <div className="w-full h-fit flex gap-4 items-center pl-16">
            <Checkbox checked />
            <div className="flex items-center gap-2">
              <Image
                src={next}
                alt="image"
                className="w-6 aspect-square object-cover"
              />
              <label
                htmlFor="react"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
              >
                next
              </label>
            </div>
          </div>

          <div className="w-full h-fit flex gap-4 items-center pl-16">
            <Checkbox checked />
            <div className="flex items-center gap-2">
              <Image
                src={sql}
                alt="image"
                className="w-6 aspect-square object-cover"
              />
              <label
                htmlFor="react"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
              >
                Sql
              </label>
            </div>
          </div>

          <div className="w-full h-fit flex gap-4 items-center pl-16">
            <Checkbox checked />
            <div className="flex items-center gap-2">
              <Image
                src={ts}
                alt="image"
                className="w-6 aspect-square object-cover"
              />
              <label
                htmlFor="react"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
              >
                Typescript
              </label>
            </div>
          </div>

          <div className="w-full h-fit flex gap-4 items-center pl-16">
            <Checkbox checked />
            <div className="flex items-center gap-2">
              <Image
                src={js}
                alt="image"
                className="w-6 aspect-square object-cover"
              />
              <label
                htmlFor="react"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-textMuted"
              >
                Javacript
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectHeading
