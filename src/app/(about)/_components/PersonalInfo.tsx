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

interface PersonalInfoProps {}

const PersonalInfo: FC<PersonalInfoProps> = ({}) => {
  return (
    <main className="hidden w-[12.9%] h-full border-r border-zinc-400 lg:flex flex-col gap-0 items-start">
      <div className="w-full h-60 border-b border-zinc-400 flex flex-col items-start gap-0">
        <div className="w-full h-16 flex items-center justify-center pt-5 gap-2 border-b border-zinc-400">
          <BsCaretDownFill size={17} className="text-white" />
          <h6 className="text-white text-sm">personal-info</h6>
        </div>
        <div className="w-full h-fit flex flex-col items-start gap-1 pt-2">
          <div className="w-full h-fit bg-transparent hover:bg-textMuted2 py-2 rounded-md flex items-center gap-1 pl-2 cursor-pointer">
            <BsChevronRight size={17} className="text-textMuted" />
            <Image src={bio} alt="bio" className="" />
            <span className="text-xs text-textMuted">bio</span>
          </div>
          <div className="w-full h-fit bg-transparent hover:bg-textMuted2 py-2 rounded-md flex items-center gap-1 pl-2 cursor-pointer">
            <BsChevronRight size={17} className="text-textMuted" />
            <Image src={interest} alt="interest" className="" />
            <span className="text-xs text-textMuted">interest</span>
          </div>
          <div className="w-full h-fit bg-transparent hover:bg-textMuted2 py-2 rounded-md flex items-center gap-1 pl-2 cursor-pointer">
            <BsChevronDown size={17} className="text-white font-bold" />
            <Image src={pro} alt="profession" className="" />
            <span className="text-xs text-textMuted">education</span>
          </div>

          {/*  */}
          <div className="w-full h-fit flex flex-col items-start gap-2 pl-12">
            <div className="w-fit h-fit flex items-center gap-1">
              <Image src={education} alt="education" className="" />
              <span className="text-xs text-textMuted">high-school</span>
            </div>
            <div className="w-fit h-fit flex items-center gap-1">
              <Image src={education} alt="education" className="" />
              <span className="text-xs text-textMuted">university</span>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="w-full h-fit flex flex-col items-start gap-0">
        <div className="w-full h-12 flex items-center gap-1 justify-start border-b border-zinc-400 pl-6">
          <BsCaretDownFill size={17} className="text-white" />
          <h6 className="text-white text-sm">contact</h6>
        </div>
        <div className="w-full h-fit flex flex-col items-start gap-2 mt-3">
          <Link
            href="mailto:olasunkanmiboluwatife110@gmail.com"
            className="w-full h-fit bg-transparent hover:bg-textMuted2 flex items-center gap-1 rounded-md py-2 pl-2"
          >
            <Image src={mail} alt="mail" className="" />
            <span className="text-xs text-textMuted">mail me</span>
          </Link>
          <div className="w-full h-fit bg-transparent hover:bg-textMuted2 flex items-start gap-1 rounded-md py-2 pl-2">
            <Image src={phone} alt="mail" className="" />
            <div className="flex flex-col w-fit h-fit items-start gap-1">
              <span className="text-xs text-textMuted">+234 814 691 3991</span>
              <span className="text-xs text-textMuted">+234 814 691 3991</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PersonalInfo
