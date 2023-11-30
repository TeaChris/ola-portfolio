import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCaretDownFill, BsChevronDown, BsChevronRight } from 'react-icons/bs'
import bio from '@/assets/bio.svg'
import interest from '@/assets/interest.svg'
import pro from '@/assets/profession.svg'
import education from '@/assets/education.svg'
import mail from '@/assets/mail.svg'
import phone from '@/assets/phone.svg'
import {
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Mail,
  Phone,
  ShieldMinus,
  X,
} from 'lucide-react'

import { about } from '@/data'

const lists = [
  {
    label: 'bio',
    img: '/svg/bio.svg',
  },
  {
    label: 'interests',
    img: '/svg/education.svg',
  },
  {
    label: 'education',
    img: '/svg/education.svg',
    children: [{ label: 'high-school' }, { label: 'university' }],
  },
]

interface PersonalInfoProps {}

const PersonalInfo: FC<PersonalInfoProps> = ({}) => {
  return (
    <div className="w-full h-full flex items-start gap-0">
      <div className="w-[32%] h-full flex flex-col items-start gap-0 border-r-2 border-textMuted2 pt-5">
        <div className="w-full h-[10%] border-b-2 flex items-center justify-start pt-7 pl-4 border-textMuted2">
          <div className="w-fit h-fit flex items-center gap-2">
            <ShieldMinus className="w-5 h-5 text-white" />
            <h3 className="text-white text-sm">personal-info</h3>
          </div>
        </div>

        <div className="w-full h-[30%] flex flex-col items-center border-b-2 border-textMuted2 gap-3 p-3">
          <div className="w-full h-fit flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-textMuted" />
            <div className="w-fit flex items-center gap-1">
              <Image src={'/svg/bio.svg'} alt="icon" width={20} height={20} />
              <h4 className="text-base text-textMuted font-medium">
                personal-info
              </h4>
            </div>
          </div>

          <div className="w-full h-fit flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-textMuted" />
            <div className="w-fit flex items-center gap-1">
              <Image
                src={'/svg/interest.svg'}
                alt="icon"
                width={20}
                height={20}
              />
              <h4 className="text-base text-textMuted font-medium">
                professional-info
              </h4>
            </div>
          </div>

          <div className="w-full h-fit flex items-center gap-2">
            <ChevronDown className="w-5 h-5 text-textMuted" />
            <div className="w-fit flex items-center gap-1">
              <Image src={'/svg/case.svg'} alt="icon" width={20} height={20} />
              <h4 className="text-base text-textMuted font-medium">
                education
              </h4>
            </div>
          </div>

          <div className="w-fit flex items-center gap-1 pl-2">
            <Image
              src={'/svg/education.svg'}
              alt="icon"
              width={20}
              height={20}
            />
            <h4 className="text-base text-textMuted font-medium">
              high-school
            </h4>
          </div>

          <div className="w-fit flex items-center gap-1 pl-2">
            <Image
              src={'/svg/education.svg'}
              alt="icon"
              width={20}
              height={20}
            />
            <h4 className="text-base text-textMuted font-medium">university</h4>
          </div>
        </div>

        <div className="w-full h-14 border-b-2 border-textMuted2 flex items-center justify-start pl-4">
          <div className="w-fit flex items-center gap-2">
            <CircleUserRound className="w-5 h-5 text-white" />
            <h3 className="text-white text-sm">contact</h3>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col items-start gap-3 pl-4 pt-4">
          <div className="w-full h-fit flex items-center gap-2">
            <Mail className="w-5 h-5 text-textMuted" />
            <Link
              href={'mailto:olasunkanmiboluwatife110@gmail.com'}
              className="text-base text-textMuted font-medium"
            >
              mail-me
            </Link>
          </div>

          <div className="w-full h-fit flex items-center gap-2">
            <Phone className="w-5 h-5 text-textMuted" />
            <h3 className="text-base text-textMuted font-medium">
              +234 814 691 3991
            </h3>
          </div>

          <div className="w-full h-fit flex items-center gap-2 pl-7">
            <h3 className="text-base text-textMuted font-medium">
              +234 814 691 3991
            </h3>
          </div>
        </div>
      </div>

      <div className="w-[68%] h-full flex flex-col items-start gap-0 pt-5">
        <div className="w-full h-[10%] border-b-2 flex items-center justify-start pt-7 pl-4 border-textMuted2">
          <div className="w-48 h-full flex items-center justify-between border-r-2 border-textMuted2">
            <h3 className="text-textMuted text-sm">personal-info</h3>
            <X className="w-5 h-5 text-textMuted cursor-pointer" />
          </div>
        </div>

        <div className="w-full h-fit p-4 flex flex-col items-start gap-2 border-b-2 border-textMuted2">
          {about.map((abt) => (
            <div
              key={abt.number}
              className="w-full h-fit flex items-center gap-6"
            >
              <h6 className="text-base text-textMuted">{abt.number}</h6>
              <span className="text-textMuted text-sm font-medium">
                {abt.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
