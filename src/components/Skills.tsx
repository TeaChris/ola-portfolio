import { FC } from 'react'
import Image from 'next/image'
import { skills, Skills } from '../../data'

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section className="w-full h-fit mt-2 px-2">
      <div className="w-full h-fit gap-2 items-center grid grid-cols-7">
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
    </section>
  )
}

export default Skills
