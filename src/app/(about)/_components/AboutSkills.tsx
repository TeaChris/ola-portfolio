import { FC } from 'react'
import Image from 'next/image'
import { skills, Skills } from '../../../../data'

interface AboutSkillsProps {}

const AboutSkills: FC<AboutSkillsProps> = ({}) => {
  return (
    <div className="w-full h-[30rem] flex flex-col items-start gap-4 mt-8 py-2 px-3">
      <div className="w-full h-fit">
        <h6 className="text-lg text-white">_my-skills</h6>
      </div>

      <div className="w-full h-fit grid grid-cols-4 items-start gap-2">
        {skills.map((skill: Skills) => {
          const { id, name, img } = skill
          return (
            <div
              key={id}
              className="w-14 aspect-square rounded-md bg-body shadow-sm shadow-black grid place-items-center group relative cursor-pointer"
            >
              <Image
                src={img}
                alt={name}
                className="w-7 aspect-square object-cover"
              />
              <span className="invisible group-hover:visible text-xs text-textMuted top-[50%] left-[50%] absolute">
                {name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutSkills
